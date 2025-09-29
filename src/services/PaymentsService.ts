import { Payment, Prisma } from '../generated/tenant';
import { PaymentsRepository } from '../repositories/PaymentsRepository';
import { PayslipService } from './PayslipService';

export class PaymentsService {
  private repo = new PaymentsRepository();
  private payslipService = new PayslipService();

  async create(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    // Créer le paiement
    const payment = await this.repo.create(data, dbName);

    // Mettre à jour le statut du bulletin
    await this.updatePayslipStatus(data.payslipId, dbName);

    return payment;
  }

  async findAll(dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    return await this.repo.findAll(dbName);
  }

  async findById(id: number, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    return await this.repo.findById(id, dbName);
  }

  async update(id: number, data: Partial<Payment>, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    const payment = await this.repo.update(id, data, dbName);

    // Mettre à jour le statut du bulletin si montant changé
    if (data.montant !== undefined) {
      await this.updatePayslipStatus(payment.payslipId, dbName);
    }

    return payment;
  }

  async delete(id: number, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    const payment = await this.repo.findById(id, dbName);
    if (!payment) throw new Error('Paiement non trouvé');

    await this.repo.delete(id, dbName);

    // Mettre à jour le statut du bulletin
    await this.updatePayslipStatus(payment.payslipId, dbName);

    return payment;
  }

  private async updatePayslipStatus(payslipId: number, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    const payments = await this.repo.findByPayslipId(payslipId, dbName);
    const totalPaid = payments.reduce((sum, p) => sum + Number(p.montant), 0);

    const payslip = await this.payslipService.findById(payslipId, dbName);
    if (!payslip) return;

    const net = Number(payslip.net);

    let status: 'PAYE' | 'PARTIEL' | 'EN_ATTENTE';
    if (totalPaid >= net) {
      status = 'PAYE';
    } else if (totalPaid > 0) {
      status = 'PARTIEL';
    } else {
      status = 'EN_ATTENTE';
    }

    await this.payslipService.updateStatus(payslipId, status, dbName);
  }
}
