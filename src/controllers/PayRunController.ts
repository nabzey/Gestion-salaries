import { Request, Response } from 'express';
import { PayRunService } from '../services/PayRunService';
import { payRunCreateSchema, payRunUpdateSchema } from '../validators/validate';

export class PayRunController {
  private service = new PayRunService();

  async create(req: Request, res: Response) {
    try {
      const validatedData = payRunCreateSchema.parse(req.body);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRun = await this.service.create({
        ...validatedData,
        periode: new Date(validatedData.periode),
        status: validatedData.status || ('BROUILLON' as const)
      }, dbName);
      res.status(201).json(payRun);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRuns = await this.service.findAll(dbName);
      res.json(payRuns);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRun = await this.service.findById(id, dbName);
      if (!payRun) return res.status(404).json({ message: 'PayRun non trouvé' });

      res.json(payRun);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const validatedData = payRunUpdateSchema.parse(req.body);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRun = await this.service.update(id, validatedData, dbName);
      res.json(payRun);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      await this.service.delete(id, dbName);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async generatePayslips(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payslips = await this.service.generatePayslips(id, dbName);
      res.json(payslips);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async approve(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRun = await this.service.approve(id, dbName);
      res.json(payRun);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async close(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) return res.status(400).json({ message: 'dbName manquant' });

      const payRun = await this.service.close(id, dbName);
      res.json(payRun);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
