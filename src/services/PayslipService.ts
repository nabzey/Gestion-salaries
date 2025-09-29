import { PayslipRepository } from '../repositories/PayslipRepository';
import { getTenantPrisma } from '../utils/tenantPrisma';
import { StatusPayslip } from '../generated/tenant';

export class PayslipService {
  private repo = new PayslipRepository();

  async create(data: {
    employeeId: number;
    payRunId: number;
    brut: number;
    deductions?: number;
    net: number;
    status?: StatusPayslip;
  }, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.create(data, client);
  }

  async findAll(filters: { payRunId?: number; employeeId?: number }, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.findAll(filters, client);
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

  async getByPayRun(payRunId: number, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.getByPayRun(payRunId, client);
  }

  async updateStatus(id: number, status: StatusPayslip, dbName: string) {
    const client = getTenantPrisma(dbName);
    return await this.repo.update(id, { status }, client);
  }
}
