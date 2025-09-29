import { Payment } from '../generated/tenant';
import { getTenantPrisma } from '../utils/tenantPrisma';

export class PaymentsRepository {
  async create(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>, dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.create({ data });
  }

  async findAll(dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.findMany({
      include: { payslip: { include: { employee: true } } }
    });
  }

  async findById(id: number, dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.findUnique({
      where: { id },
      include: { payslip: { include: { employee: true } } }
    });
  }

  async update(id: number, data: Partial<Payment>, dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.update({
      where: { id },
      data,
      include: { payslip: { include: { employee: true } } }
    });
  }

  async delete(id: number, dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.delete({ where: { id } });
  }

  async findByPayslipId(payslipId: number, dbName: string) {
    const prisma = getTenantPrisma(dbName);
    return await prisma.payment.findMany({
      where: { payslipId },
      orderBy: { date: 'desc' }
    });
  }
}
