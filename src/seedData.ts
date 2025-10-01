import { PrismaClient as GlobalPrismaClient } from '@prisma/client';
import { PrismaClient as TenantPrismaClient } from './generated/tenant';

const globalPrisma = new GlobalPrismaClient();
const tenantPrisma = new TenantPrismaClient();

async function seedData() {
  try {
    // Find the tenant entreprise
    const entreprise = await globalPrisma.entreprises.findUnique({
      where: { dbName: 'tenante' }
    });

    if (!entreprise) {
      console.error('Entreprise tenant non trouvée. Veuillez exécuter le seed principal d\'abord.');
      return;
    }

    // Use tenant prisma client connected to the tenant DB
    // tenantPrisma is already configured to connect to the tenant DB via generated client

    // Create employees
    const employee1 = await tenantPrisma.employee.create({
      data: {
        nom: 'Jean Dupont',
        poste: 'Développeur',
        typeContrat: 'FIXE',
        tauxSalaire: 500000,
        actif: true,
      }
    });

    // Create pay runs
    const payRun1 = await tenantPrisma.payRun.create({
      data: {
        periode: new Date(2023, 7, 1),
        type: 'MENSUEL',
        status: 'BROUILLON',
      }
    });

    // Create payslips
    const payslip1 = await tenantPrisma.payslip.create({
      data: {
        employeeId: employee1.id,
        payRunId: payRun1.id,
        brut: 500000,
        deductions: 50000,
        net: 450000,
        status: 'EN_ATTENTE',
      }
    });

    // Create payments
    await tenantPrisma.payment.create({
      data: {
        montant: 200000,
        mode: 'ESPECES',
        payslipId: payslip1.id,
        date: new Date(),
      }
    });

    console.log('✅ Données de test créées avec succès dans la base tenant.');
  } catch (error) {
    console.error('❌ Erreur lors de la création des données de test:', error);
  } finally {
    await globalPrisma.$disconnect();
    await tenantPrisma.$disconnect();
  }
}

seedData();
