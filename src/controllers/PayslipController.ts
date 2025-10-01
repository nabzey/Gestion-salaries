import { Request, Response } from 'express';
import { PayslipService } from '../services/PayslipService';
import { payslipUpdateSchema } from '../validators/validate';
import { PDFGenerator } from '../utils/pdfGenerator';

export class PayslipController {
  private service = new PayslipService();

  async getAll(req: Request, res: Response) {
    try {
      const filters: { payRunId?: number; employeeId?: number } = {};
      if (req.query.payRunId) filters.payRunId = parseInt(req.query.payRunId as string);
      if (req.query.employeeId) filters.employeeId = parseInt(req.query.employeeId as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
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
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(404).json({ message: 'Payslip non trouvé' });
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
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
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
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

      const payslip = await this.service.updateStatus(id, status, dbName);
      res.json(payslip);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async generateMonthlyPayslips(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Veuillez sélectionner une entreprise pour générer les bulletins' });
      const dbName = req.user.dbName;
      const { period } = req.body;

      const result = await this.service.generateMonthlyPayslips(dbName, period);
      res.json({
        message: 'Bulletins générés avec succès',
        data: result
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async generatePDF(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(404).json({ message: 'Bulletin non trouvé' });
      const dbName = req.user.dbName;

      // Vérifier que le cycle de paie n'est pas en brouillon
      const payslip = await this.service.findById(id, dbName);
      if (!payslip) return res.status(404).json({ message: 'Bulletin non trouvé' });

      if (payslip.payRun.status === 'BROUILLON') {
        return res.status(400).json({ message: 'Le cycle de paie est en brouillon. Approuvez-le d\'abord pour télécharger les bulletins.' });
      }

      const buffer = await PDFGenerator.generatePayslipPDF(id, dbName);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=bulletin_${id}.pdf`);
      res.send(buffer);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
