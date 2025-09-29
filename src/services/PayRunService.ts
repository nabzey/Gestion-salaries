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

  async update(id: number, data: Partial<any>, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.update(id, data, client);
  }

  async delete(id: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.delete(id, client);
  }

  async generatePayslips(payRunId: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.generatePayslips(payRunId, client);
  }

  async approve(payRunId: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    // Check if all payslips are generated
    const payRun = await this.repo.findById(payRunId, client);
    if (!payRun) throw new Error('PayRun non trouvé');

    if (payRun.payslips.length === 0) {
      throw new Error('Aucun bulletin généré pour ce cycle');
    }

    return await this.repo.update(payRunId, { status: 'APPROUVE' }, client);
  }

  async close(payRunId: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.update(payRunId, { status: 'CLOTURE' }, client);
  }
}
