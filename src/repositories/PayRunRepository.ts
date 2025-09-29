import { PrismaClient } from '../generated/tenant';
import { PayRun, StatusPayRun } from '../generated/tenant';

export class PayRunRepository {
  async create(data: { periode: Date; type: string; status?: StatusPayRun }, client: PrismaClient) {
    return await client.payRun.create({ data });
  }

  async findAll(client: PrismaClient) {
    return await client.payRun.findMany({
      include: { payslips: { include: { employee: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findById(id: number, client: PrismaClient) {
    return await client.payRun.findUnique({
      where: { id },
      include: { payslips: { include: { employee: true, payments: true } } }
    });
  }

  async update(id: number, data: Partial<PayRun>, client: PrismaClient) {
    return await client.payRun.update({
      where: { id },
      data
    });
  }

  async delete(id: number, client: PrismaClient) {
    return await client.payRun.delete({ where: { id } });
  }

  async generatePayslips(payRunId: number, client: PrismaClient) {
    // Get all active employees
    const employees = await client.employee.findMany({ where: { actif: true } });

    const payslips = [];
    for (const employee of employees) {
      let brut = employee.tauxSalaire;

      // For journalier, multiply by joursTravailles if set
      if (employee.typeContrat === 'JOURNALIER' && employee.joursTravailles) {
        brut = brut.mul(employee.joursTravailles);
      }

      // Simple calculation: net = brut - deductions (0 for now)
      const net = brut;

      const payslip = await client.payslip.create({
        data: {
          employeeId: employee.id,
          payRunId,
          brut,
          net,
          status: 'EN_ATTENTE'
        }
      });
      payslips.push(payslip);
    }

    return payslips;
  }
}
