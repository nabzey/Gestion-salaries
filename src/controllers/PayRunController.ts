import { Request, Response } from 'express';
import { PayRunService } from '../services/PayRunService';
import { StatusPayRun } from '../generated/tenant';

export class PayRunController {
  private service = new PayRunService();

  async getAll(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
      const dbName = req.user.dbName;

      const payRuns = await this.service.findAll(dbName);
      res.json(payRuns);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(404).json({ message: 'PayRun non trouvé' });
      const dbName = req.user.dbName;

      const payRun = await this.service.findById(id, dbName);
      if (!payRun) return res.status(404).json({ message: 'PayRun non trouvé' });

      res.json(payRun);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async approvePayRun(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

      const payRun = await this.service.approvePayRun(id, dbName);
      res.json({ message: 'PayRun approuvé', payRun });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async closePayRun(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.status(400).json({ message: 'Action non autorisée' });
      const dbName = req.user.dbName;

      const payRun = await this.service.closePayRun(id, dbName);
      res.json({ message: 'PayRun clôturé', payRun });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getByStatus(req: Request, res: Response) {
    try {
      const status = req.params.status as StatusPayRun;
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
      const dbName = req.user.dbName;

      const payRuns = await this.service.getPayRunsByStatus(status, dbName);
      res.json(payRuns);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByPeriod(req: Request, res: Response) {
    try {
      const year = parseInt(req.params.year as string);
      const month = parseInt(req.params.month as string);
      if (!req.user) return res.status(400).json({ message: 'Utilisateur non authentifié' });
      if (!req.user.dbName) return res.json([]);
      const dbName = req.user.dbName;

      const payRuns = await this.service.getPayRunsByPeriod(year, month, dbName);
      res.json(payRuns);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
