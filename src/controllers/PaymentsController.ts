import { Request, Response } from 'express';
import { PaymentsService } from '../services/PaymentsService';
import { paymentCreateSchema, paymentUpdateSchema } from '../validators/validate';
import { Prisma } from '@prisma/client';
import { PDFGenerator } from '../utils/pdfGenerator';

export class PaymentsController {
  private service = new PaymentsService();

  async getAll(req: Request, res: Response) {
    try {
      console.log('PaymentsController.getAll - User:', req.user);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
      const dbName = req.user.dbName;

      const payments = await this.service.findAll(dbName);
      res.json(payments);
    } catch (error: any) {
      console.error('Erreur getAll payments:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(404).json({ message: 'Paiement non trouvé' });
      const dbName = req.user.dbName;

      const payment = await this.service.findById(id, dbName);
      if (!payment) return res.status(404).json({ message: 'Paiement non trouvé' });

      res.json(payment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByEmployeeId(req: Request, res: Response) {
    try {
      const employeeId = parseInt(req.params.employeeId as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
      const dbName = req.user.dbName;

      const payments = await this.service.findByEmployeeId(employeeId, dbName);
      res.json(payments);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const validatedData = paymentCreateSchema.parse(req.body);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

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
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

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
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

      const payment = await this.service.delete(id, dbName);
      res.json({ message: 'Paiement supprimé', payment });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async generatePDF(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(404).json({ message: 'Paiement non trouvé' });
      const dbName = req.user.dbName;

      const buffer = await PDFGenerator.generatePaymentReceiptPDF(id, dbName);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=recu_paiement_${id}.pdf`);
      res.send(buffer);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
