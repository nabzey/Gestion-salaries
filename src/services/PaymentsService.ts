import { Payment, Prisma } from '../generated/tenant';
import { PaymentsRepository } from '../repositories/PaymentsRepository';
import { PayslipService } from './PayslipService';

export class PaymentsService {
  private repo = new PaymentsRepository();
  private payslipService = new PayslipService();

  async create(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');

    // Validation du paiement
    await this.validatePayment(data, dbName);

    // Créer le paiement
    const payment = await this.repo.create(data, dbName);

    // Mettre à jour le statut du bulletin
    await this.updatePayslipStatus(data.payslipId, dbName);

    return payment;
  }

  private async validatePayment(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>, dbName: string) {
    const { payslipId, montant } = data;

    // Vérifier que le bulletin existe
    const payslip = await this.payslipService.findById(payslipId, dbName);
    if (!payslip) {
      throw new Error('Bulletin de paie non trouvé');
    }

    // Vérifier que le bulletin n'est pas déjà payé
    if (payslip.status === 'PAYE') {
      throw new Error('Ce bulletin est déjà entièrement payé');
    }

    // Calculer le total déjà payé
    const existingPayments = await this.repo.findByPayslipId(payslipId, dbName);
    const totalPaid = existingPayments.reduce((sum, p) => sum + Number(p.montant), 0);

    // Vérifier que le nouveau paiement ne dépasse pas le montant restant
    const remainingAmount = Number(payslip.net) - totalPaid;
    if (Number(montant) > remainingAmount) {
      throw new Error(`Montant trop élevé. Maximum autorisé: ${remainingAmount} XOF`);
    }

    // Vérifier que le montant n'est pas négatif
    if (Number(montant) <= 0) {
      throw new Error('Le montant doit être positif');
    }
  }

  async findAll(dbName: string | null) {
    if (!dbName) throw new Error('dbName required');

    // Récupérer tous les paiements avec leurs relations
    const payments = await this.repo.findAll(dbName);

    // Ne retourner que les paiements des cycles de paie clôturés
    return payments.filter(payment => payment.payslip?.payRun?.status === 'CLOTURE');
  }

  async findById(id: number, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    return await this.repo.findById(id, dbName);
  }

  async findByEmployeeId(employeeId: number, dbName: string | null) {
    if (!dbName) throw new Error('dbName required');
    return await this.repo.findByEmployeeId(employeeId, dbName);
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
