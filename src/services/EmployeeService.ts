import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { getTenantPrisma } from '../utils/tenantPrisma';
import { Employee, TypeContrat } from '../generated/tenant';
import { Prisma } from '@prisma/client';

export class EmployeeService {
  private repo = new EmployeeRepository();

  async create(employeeData: { nom: string; poste: string; typeContrat: TypeContrat; tauxSalaire: number; coordonneesBancaires?: string | null; actif?: boolean; joursTravailles?: number | null }, dbName: string): Promise<Employee> {
    const client = getTenantPrisma(dbName);

    // Validation métier
    if (employeeData.tauxSalaire <= 0) {
      throw new Error('Le taux salaire doit être positif');
    }

    if (employeeData.typeContrat === TypeContrat.JOURNALIER && (!employeeData.joursTravailles || employeeData.joursTravailles <= 0)) {
      throw new Error('Le nombre de jours travaillés est requis pour les contrats journaliers');
    }

    const data = {
      nom: employeeData.nom,
      poste: employeeData.poste,
      typeContrat: employeeData.typeContrat,
      tauxSalaire: employeeData.tauxSalaire,
      coordonneesBancaires: employeeData.coordonneesBancaires || null,
      actif: employeeData.actif ?? true,
      joursTravailles: employeeData.joursTravailles || null,
    };

    return await this.repo.create(data, client);
  }

  async findAll(
    filters: {
      status?: boolean;
      poste?: string;
      typeContrat?: TypeContrat;
      actif?: boolean;
    },
    dbName: string
  ): Promise<Employee[]> {
    const client = getTenantPrisma(dbName);
    return await this.repo.findAll(client, filters);
  }

  async findById(id: number, dbName: string): Promise<Employee | null> {
    const client = getTenantPrisma(dbName);
    return await this.repo.findById(id, client);
  }

  async update(id: number, data: Partial<{ nom: string; poste: string; typeContrat: TypeContrat; tauxSalaire: number; coordonneesBancaires: string | null; actif: boolean; joursTravailles: number | null }>, dbName: string): Promise<Employee> {
    const client = getTenantPrisma(dbName);

    // Validation métier
    if (data.tauxSalaire !== undefined && data.tauxSalaire <= 0) {
      throw new Error('Le taux salaire doit être positif');
    }

    const updateData: any = { ...data };
    if (data.tauxSalaire !== undefined) {
      updateData.tauxSalaire = new Prisma.Decimal(data.tauxSalaire);
    }

    return await this.repo.update(id, updateData, client);
  }

  async delete(id: number, dbName: string): Promise<Employee> {
    const client = getTenantPrisma(dbName);
    return await this.repo.delete(id, client);
  }

  async toggleActif(id: number, dbName: string): Promise<Employee> {
    const client = getTenantPrisma(dbName);
    const employee = await this.repo.findById(id, client);
    if (!employee) {
      throw new Error('Employé non trouvé');
    }
    return await this.repo.update(id, { actif: !employee.actif }, client);
  }
}
