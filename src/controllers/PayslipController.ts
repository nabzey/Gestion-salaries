import { Request, Response } from 'express';
import { PayslipService } from '../services/PayslipService';
import { payslipUpdateSchema } from '../validators/validate';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.vfs;

export class PayslipController {
  private service = new PayslipService();

  async getAll(req: Request, res: Response) {
    try {
      const filters: { payRunId?: number; employeeId?: number } = {};
      if (req.query.payRunId) filters.payRunId = parseInt(req.query.payRunId as string);
      if (req.query.employeeId) filters.employeeId = parseInt(req.query.employeeId as string);
      if (!req.user || !req.user.dbName) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user.dbName;

      const payslips = await this.service.findAll(filters, dbName);
      res.json(payslips);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user || !req.user.dbName) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user.dbName;

      const payslip = await this.service.findById(id, dbName);
      if (!payslip) return res.status(404).json({ message: 'Payslip non trouvé' });

      res.json(payslip);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const validatedData = payslipUpdateSchema.parse(req.body);
      if (!req.user || !req.user.dbName) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user.dbName;

      const payslip = await this.service.update(id, validatedData, dbName);
      res.json(payslip);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const { status } = req.body;
      if (!status) return res.status(400).json({ message: 'Status requis' });
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payslip = await this.service.updateStatus(id, status, dbName);
      res.json(payslip);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async generatePDF(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user || !req.user.dbName) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user.dbName;

      const payslip = await this.service.findById(id, dbName);
      if (!payslip) return res.status(404).json({ message: 'Payslip non trouvé' });

      const docDefinition: any = {
        content: [
          { text: 'Bulletin de Paie', style: 'header' },
          { text: `Employé: ${payslip.employee.nom}`, margin: [0, 10, 0, 0] },
          { text: `Poste: ${payslip.employee.poste}`, margin: [0, 5, 0, 0] },
          { text: `Cycle: ${payslip.payRun.periode} (${payslip.payRun.type})`, margin: [0, 5, 0, 0] },
          { text: `Brut: ${payslip.brut} XOF`, margin: [0, 10, 0, 0] },
          { text: `Déductions: ${payslip.deductions} XOF`, margin: [0, 5, 0, 0] },
          { text: `Net à payer: ${payslip.net} XOF`, margin: [0, 5, 0, 0] },
          { text: `Statut: ${payslip.status}`, margin: [0, 10, 0, 0] },
          { text: 'Signature:', alignment: 'right', margin: [0, 20, 0, 0] }
        ],
        styles: {
          header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] }
        }
      };

      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.getBuffer((buffer: any) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=bulletin_${id}.pdf`);
        res.send(buffer);
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
