import { PrismaClient } from '../generated/tenant';
import { Payslip, StatusPayslip } from '../generated/tenant';

export class PayslipRepository {
  async create(data: {
    employeeId: number;
    payRunId: number;
    brut: number;
    deductions?: number;
    net: number;
    status?: StatusPayslip;
  }, client: PrismaClient) {
    return await client.payslip.create({ data });
  }

  async findAll(filters: { payRunId?: number; employeeId?: number }, client: PrismaClient) {
    return await client.payslip.findMany({
      where: filters,
      include: { employee: true, payRun: true, payments: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findById(id: number, client: PrismaClient) {
    return await client.payslip.findUnique({
      where: { id },
      include: { employee: true, payRun: true, payments: true }
    });
  }

  async update(id: number, data: Partial<Payslip>, client: PrismaClient) {
    return await client.payslip.update({
      where: { id },
      data
    });
  }

  async delete(id: number, client: PrismaClient) {
    return await client.payslip.delete({ where: { id } });
  }

  async getByPayRun(payRunId: number, client: PrismaClient) {
    return await client.payslip.findMany({
      where: { payRunId },
      include: { employee: true, payments: true }
    });
  }
}
