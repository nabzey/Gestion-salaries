import { Request, Response } from 'express';
import { DashboardService } from '../services/DashboardService';

export class DashboardController {
  private service = new DashboardService();

  async getDashboard(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.dbName) return res.status(400).json({ message: 'dbName manquant' });
      const dbName = req.user.dbName;

      const data = await this.service.getDashboardData(dbName);
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
