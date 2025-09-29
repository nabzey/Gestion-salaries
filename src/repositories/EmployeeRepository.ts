import { PrismaClient as TenantPrismaClient, Employee, TypeContrat } from '../generated/tenant';
import { Prisma } from '@prisma/client';

export class EmployeeRepository {
  async create(employeeData: { nom: string; poste: string; typeContrat: TypeContrat; tauxSalaire: number; coordonneesBancaires: string | null; actif: boolean; joursTravailles: number | null }, client: TenantPrismaClient): Promise<Employee> {
    return await client.employee.create({
      data: {
        ...employeeData,
        tauxSalaire: new Prisma.Decimal(employeeData.tauxSalaire),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async findAll(
    client: TenantPrismaClient,
    filters?: {
      poste?: string;
      typeContrat?: TypeContrat;
      actif?: boolean;
    }
  ): Promise<Employee[]> {
    const where: any = {};

    if (filters?.poste) where.poste = { contains: filters.poste, mode: 'insensitive' };
    if (filters?.typeContrat) where.typeContrat = filters.typeContrat;
    if (filters?.actif !== undefined) where.actif = filters.actif;

    return await client.employee.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
    });
  }

  async findById(id: number, client: TenantPrismaClient): Promise<Employee | null> {
    return await client.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<Omit<Employee, 'id'>>, client: TenantPrismaClient): Promise<Employee> {
    return await client.employee.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number, client: TenantPrismaClient): Promise<Employee> {
    return await client.employee.delete({
      where: { id },
    });
  }
}
