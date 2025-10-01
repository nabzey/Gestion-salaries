import { PayRunRepository } from '../repositories/PayRunRepository';
import { getTenantPrisma } from '../utils/tenantPrisma';
import { StatusPayRun } from '../generated/tenant';

export class PayRunService {
  private repo = new PayRunRepository();

  async create(data: { periode: Date; type: string; status?: StatusPayRun }, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.create(data, client);
  }

  async findAll(dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.findAll(client);
  }

  async findById(id: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.findById(id, client);
  }

  async updateStatus(id: number, status: StatusPayRun, dbName: string) {
    const client = getTenantPrisma(dbName);

    // Validation du workflow
    const payRun = await this.repo.findById(id, client);
    if (!payRun) throw new Error('PayRun non trouvé');

    // Vérifier les transitions autorisées
    if (payRun.status === 'CLOTURE') {
      throw new Error('PayRun clôturé ne peut plus être modifié');
    }

    if (status === 'BROUILLON' && payRun.status !== 'BROUILLON') {
      throw new Error('Impossible de revenir au statut BROUILLON');
    }

    if (status === 'APPROUVE' && payRun.status !== 'BROUILLON') {
      throw new Error('Seul un PayRun en BROUILLON peut être approuvé');
    }

    if (status === 'CLOTURE' && payRun.status !== 'APPROUVE') {
      throw new Error('Seul un PayRun approuvé peut être clôturé');
    }

    return await this.repo.update(id, { status }, client);
  }

  async approvePayRun(id: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    const payRun = await this.updateStatus(id, 'APPROUVE', dbName);

    // Mettre à jour le statut des bulletins de paie associés
    await client.payslip.updateMany({
      where: { payRunId: id, status: 'EN_ATTENTE' },
      data: { status: 'PARTIEL' } // Ils deviennent partiels car peuvent encore recevoir des paiements
    });

    return payRun;
  }

  async closePayRun(id: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    const payRun = await this.updateStatus(id, 'CLOTURE', dbName);

    // Finaliser les bulletins de paie - ceux sans paiement deviennent PAYE
    const payslips = await client.payslip.findMany({
      where: { payRunId: id },
      include: { payments: true }
    });

    for (const payslip of payslips) {
      const totalPaid = payslip.payments.reduce((sum, p) => sum + Number(p.montant), 0);
      if (totalPaid >= Number(payslip.net)) {
        await client.payslip.update({
          where: { id: payslip.id },
          data: { status: 'PAYE' }
        });
      } else if (totalPaid > 0) {
        await client.payslip.update({
          where: { id: payslip.id },
          data: { status: 'PARTIEL' }
        });
      } else {
        // Si aucun paiement, marquer comme PAYE (cycle clôturé)
        await client.payslip.update({
          where: { id: payslip.id },
          data: { status: 'PAYE' }
        });
      }
    }

    return payRun;
  }

  async getPayRunsByStatus(status: StatusPayRun, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.findByStatus(status, client);
  }

  async getPayRunsByPeriod(year: number, month: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    return await this.repo.findByPeriod(startDate, endDate, client);
  }
}
