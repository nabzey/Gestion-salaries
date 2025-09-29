import { Request, Response } from 'express';
import { PaymentsService } from '../services/PaymentsService';
import { paymentCreateSchema, paymentUpdateSchema } from '../validators/validate';
import { Prisma } from '@prisma/client';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.vfs;

export class PaymentsController {
  private service = new PaymentsService();

  async getAll(req: Request, res: Response) {
    try {
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const payments = await this.service.findAll(dbName);
      res.json(payments);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const payment = await this.service.findById(id, dbName);
      if (!payment) return res.status(404).json({ message: 'Paiement non trouvé' });

      res.json(payment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const validatedData = paymentCreateSchema.parse(req.body);
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const date = validatedData.date ? new Date(validatedData.date) : new Date();
      const paymentData = {
        ...validatedData,
        montant: new Prisma.Decimal(validatedData.montant),
        date,
      };

      const payment = await this.service.create(paymentData, dbName);
      res.status(201).json(payment);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const validatedData = paymentUpdateSchema.parse(req.body);
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const updateData: any = {};
      if (validatedData.montant !== undefined) updateData.montant = new Prisma.Decimal(validatedData.montant);
      if (validatedData.mode !== undefined) updateData.mode = validatedData.mode;
      if (validatedData.date !== undefined) updateData.date = new Date(validatedData.date);
      if (validatedData.payslipId !== undefined) updateData.payslipId = validatedData.payslipId;

      const payment = await this.service.update(id, updateData, dbName);
      res.json(payment);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const payment = await this.service.delete(id, dbName);
      res.json({ message: 'Paiement supprimé', payment });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async generatePDF(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user || req.user.dbName == null) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user!.dbName!;

      const payment = await this.service.findById(id, dbName);
      if (!payment) return res.status(404).json({ message: 'Paiement non trouvé' });

      const docDefinition: any = {
        content: [
          { text: 'Reçu de Paiement', style: 'header' },
          { text: `ID Paiement: ${payment.id}`, margin: [0, 10, 0, 0] },
          { text: `Employé: ${payment.payslip.employee.nom}`, margin: [0, 5, 0, 0] },
          { text: `Bulletin: ${payment.payslip.id}`, margin: [0, 5, 0, 0] },
          { text: `Montant: ${payment.montant} XOF`, margin: [0, 5, 0, 0] },
          { text: `Mode: ${payment.mode}`, margin: [0, 5, 0, 0] },
          { text: `Date: ${payment.date.toISOString().split('T')[0]}`, margin: [0, 5, 0, 0] },
          { text: `Statut Bulletin: ${payment.payslip.status}`, margin: [0, 10, 0, 0] },
          { text: 'Signature:', alignment: 'right', margin: [0, 20, 0, 0] }
        ],
        styles: {
          header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] }
        }
      };

      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.getBuffer((buffer: any) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=recu_paiement_${id}.pdf`);
        res.send(buffer);
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
