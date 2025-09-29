import { getTenantPrisma } from '../utils/tenantPrisma';

export class DashboardRepository {
  async getKPIs(dbName: string) {
    const client = getTenantPrisma(dbName);

    // Nombre d'employés actifs
    const activeEmployees = await client.employee.count({
      where: { actif: true }
    });

    // Masse salariale totale (somme des tauxSalaire des actifs)
    const totalSalary = await client.employee.aggregate({
      where: { actif: true },
      _sum: { tauxSalaire: true }
    });

    // Montant payé (somme des montants des paiements)
    const totalPaid = await client.payment.aggregate({
      _sum: { montant: true }
    });

    // Montant restant (somme des net des payslips non payés)
    const remainingAmount = await client.payslip.aggregate({
      where: { status: { not: 'PAYE' } },
      _sum: { net: true }
    });

    return {
      activeEmployees,
      totalSalary: totalSalary._sum.tauxSalaire || 0,
      totalPaid: totalPaid._sum.montant || 0,
      remainingAmount: remainingAmount._sum.net || 0
    };
  }

  async getSalaryEvolution(dbName: string) {
    const client = getTenantPrisma(dbName);

    // Évolution de la masse salariale sur 6 derniers mois
    // Supposons que les payruns ont des périodes mensuelles
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const payRuns = await client.payRun.findMany({
      where: {
        status: 'CLOTURE',
        createdAt: { gte: sixMonthsAgo }
      },
      include: {
        payslips: true
      },
      orderBy: { createdAt: 'asc' }
    });

    // Calculer la masse pour chaque mois
    const evolution = payRuns.map(pr => ({
      month: pr.periode,
      totalSalary: pr.payslips.reduce((sum, p) => sum + Number(p.brut), 0)
    }));

    return evolution;
  }

  async getUpcomingPayments(dbName: string) {
    const client = getTenantPrisma(dbName);

    // Prochains paiements : payslips avec status EN_ATTENTE ou PARTIEL
    const payslips = await client.payslip.findMany({
      where: {
        status: { in: ['EN_ATTENTE', 'PARTIEL'] }
      },
      include: {
        employee: true,
        payRun: true
      },
      orderBy: { createdAt: 'asc' },
      take: 10 // Limiter à 10
    });

    return payslips.map(p => ({
      id: p.id,
      employeeName: p.employee.nom,
      amount: p.net,
      dueDate: p.payRun.periode, // Supposons que periode est la date
      status: p.status
    }));
  }
}
