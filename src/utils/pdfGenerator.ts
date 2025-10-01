import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { getTenantPrisma } from './tenantPrisma';

pdfMake.vfs = pdfFonts.vfs;

export class PDFGenerator {
  static async generatePayslipPDF(payslipId: number, dbName: string): Promise<Buffer> {
    const client = getTenantPrisma(dbName);

    const payslip = await client.payslip.findUnique({
      where: { id: payslipId },
      include: {
        employee: true,
        payRun: true,
        payments: {
          orderBy: { date: 'asc' }
        }
      }
    });

    if (!payslip) {
      throw new Error('Bulletin non trouvé');
    }

    const totalPaid = payslip.payments.reduce((sum, p) => sum + Number(p.montant), 0);
    const remaining = Number(payslip.net) - totalPaid;

    const docDefinition: any = {
      content: [
        { text: 'BULLETIN DE PAIE', style: 'header', alignment: 'center' },
        { text: '\n' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                { text: 'Employé:', style: 'label' },
                { text: payslip.employee.nom, style: 'value' }
              ],
              [
                { text: 'Poste:', style: 'label' },
                { text: payslip.employee.poste, style: 'value' }
              ],
              [
                { text: 'Période:', style: 'label' },
                { text: `${payslip.payRun.periode.toLocaleDateString('fr-FR')} (${payslip.payRun.type})`, style: 'value' }
              ],
              [
                { text: 'Type de contrat:', style: 'label' },
                { text: payslip.employee.typeContrat, style: 'value' }
              ]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n\nDÉTAIL DES SALAIRES', style: 'subheader' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                { text: 'Salaire brut:', style: 'label' },
                { text: `${Number(payslip.brut).toLocaleString()} XOF`, style: 'value', alignment: 'right' }
              ],
              [
                { text: 'Déductions:', style: 'label' },
                { text: `${Number(payslip.deductions).toLocaleString()} XOF`, style: 'value', alignment: 'right' }
              ],
              [
                { text: 'Salaire net:', style: 'label', bold: true },
                { text: `${Number(payslip.net).toLocaleString()} XOF`, style: 'value', alignment: 'right', bold: true }
              ]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n\nHISTORIQUE DES PAIEMENTS', style: 'subheader' },
        {
          table: {
            widths: ['auto', '*', 'auto'],
            body: [
              [
                { text: 'Date', style: 'tableHeader' },
                { text: 'Mode', style: 'tableHeader' },
                { text: 'Montant', style: 'tableHeader', alignment: 'right' }
              ],
              ...payslip.payments.map(payment => [
                { text: payment.date.toLocaleDateString('fr-FR'), style: 'tableCell' },
                { text: payment.mode.replace('_', ' '), style: 'tableCell' },
                { text: `${Number(payment.montant).toLocaleString()} XOF`, style: 'tableCell', alignment: 'right' }
              ])
            ]
          }
        },
        { text: '\n' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                { text: 'Total payé:', style: 'label' },
                { text: `${totalPaid.toLocaleString()} XOF`, style: 'value', alignment: 'right' }
              ],
              [
                { text: 'Restant à payer:', style: 'label' },
                { text: `${remaining.toLocaleString()} XOF`, style: 'value', alignment: 'right' }
              ]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n\n' },
        {
          text: `Statut: ${payslip.status}`,
          style: 'status',
          alignment: 'center'
        },
        { text: '\n\n\n' },
        {
          columns: [
            {
              text: 'Signature employé',
              style: 'signature',
              alignment: 'left'
            },
            {
              text: 'Signature entreprise',
              style: 'signature',
              alignment: 'right'
            }
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 10]
        },
        label: {
          fontSize: 10,
          color: '#666'
        },
        value: {
          fontSize: 10,
          bold: true
        },
        tableHeader: {
          fontSize: 10,
          bold: true,
          fillColor: '#f0f0f0'
        },
        tableCell: {
          fontSize: 9
        },
        status: {
          fontSize: 12,
          bold: true,
          color: payslip.status === 'PAYE' ? '#22c55e' : payslip.status === 'PARTIEL' ? '#f59e0b' : '#ef4444'
        },
        signature: {
          fontSize: 10,
          italics: true,
          margin: [0, 40, 0, 0]
        }
      }
    };

    return new Promise((resolve, reject) => {
      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.getBuffer((buffer) => {
        resolve(buffer);
      });
    });
  }

  static async generatePaymentReceiptPDF(paymentId: number, dbName: string): Promise<Buffer> {
    const client = getTenantPrisma(dbName);

    const payment = await client.payment.findUnique({
      where: { id: paymentId },
      include: {
        payslip: {
          include: {
            employee: true,
            payRun: true
          }
        }
      }
    });

    if (!payment) {
      throw new Error('Paiement non trouvé');
    }

    const docDefinition: any = {
      content: [
        { text: 'REÇU DE PAIEMENT', style: 'header', alignment: 'center' },
        { text: '\n' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                { text: 'Numéro de reçu:', style: 'label' },
                { text: `PAY-${payment.id.toString().padStart(6, '0')}`, style: 'value' }
              ],
              [
                { text: 'Date:', style: 'label' },
                { text: payment.date.toLocaleDateString('fr-FR'), style: 'value' }
              ],
              [
                { text: 'Employé:', style: 'label' },
                { text: payment.payslip.employee.nom, style: 'value' }
              ],
              [
                { text: 'Poste:', style: 'label' },
                { text: payment.payslip.employee.poste, style: 'value' }
              ],
              [
                { text: 'Période:', style: 'label' },
                { text: `${payment.payslip.payRun.periode.toLocaleDateString('fr-FR')} (${payment.payslip.payRun.type})`, style: 'value' }
              ],
              [
                { text: 'Mode de paiement:', style: 'label' },
                { text: payment.mode.replace('_', ' '), style: 'value' }
              ]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n\n' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                { text: 'Montant payé:', style: 'amountLabel' },
                { text: `${Number(payment.montant).toLocaleString()} XOF`, style: 'amountValue' }
              ]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n\n' },
        {
          text: 'Ce reçu atteste du paiement effectué.',
          style: 'confirmation',
          alignment: 'center'
        },
        { text: '\n\n\n' },
        {
          columns: [
            {
              text: 'Signature employé',
              style: 'signature',
              alignment: 'left'
            },
            {
              text: 'Signature entreprise',
              style: 'signature',
              alignment: 'right'
            }
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        label: {
          fontSize: 10,
          color: '#666'
        },
        value: {
          fontSize: 10,
          bold: true
        },
        amountLabel: {
          fontSize: 14,
          bold: true,
          color: '#22c55e'
        },
        amountValue: {
          fontSize: 16,
          bold: true,
          color: '#22c55e'
        },
        confirmation: {
          fontSize: 12,
          italics: true
        },
        signature: {
          fontSize: 10,
          italics: true,
          margin: [0, 40, 0, 0]
        }
      }
    };

    return new Promise((resolve, reject) => {
      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.getBuffer((buffer) => {
        resolve(buffer);
      });
    });
  }
}