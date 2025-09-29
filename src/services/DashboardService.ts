import { DashboardRepository } from '../repositories/DashboardRepository';

export class DashboardService {
  private repo = new DashboardRepository();

  async getDashboardData(dbName: string) {
    const kpis = await this.repo.getKPIs(dbName);
    const salaryEvolution = await this.repo.getSalaryEvolution(dbName);
    const upcomingPayments = await this.repo.getUpcomingPayments(dbName);

    return {
      kpis,
      salaryEvolution,
      upcomingPayments
    };
  }
}
