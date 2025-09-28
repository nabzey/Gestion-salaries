import { Users, Entreprises, PrismaClient } from "@prisma/client";

const prismaGlobal = new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_URL ?? "" }
  }
});

export class UsersRepository {
  async findById(id: number): Promise<Users | null> {
    return await prismaGlobal.users.findUnique({ 
      where: { id },
      include: {
        entreprise: true // Inclure les données de l'entreprise si nécessaire
      }
    });
  }

  async create(data: Omit<Users, "id">): Promise<Users> {
    return await prismaGlobal.users.create({ 
      data,
      include: {
        entreprise: true
      }
    });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await prismaGlobal.users.findUnique({ 
      where: { email },
      include: {
        entreprise: true
      }
    });
  }

  async findAllUsers(): Promise<Users[]> {
    return await prismaGlobal.users.findMany({
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByEntrepriseId(entrepriseId: number): Promise<Users[]> {
    return await prismaGlobal.users.findMany({
      where: { entrepriseId },
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByRole(role: string): Promise<Users[]> {
    return await prismaGlobal.users.findMany({
      where: {
        role: role as any // Cast to 'any' or replace with the correct enum type, e.g. 'Role'
      },
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByEntrepriseIdAndRole(entrepriseId: number, role: "ADMIN" | "CAISSIER"): Promise<Users[]> {
    return await prismaGlobal.users.findMany({
      where: { entrepriseId, role }
    });
  }

  // Méthodes pour les entreprises
  async createEntreprise(data: Omit<Entreprises, "id">): Promise<Entreprises> {
    return await prismaGlobal.entreprises.create({ 
      data,
      include: {
        users: true // Inclure les utilisateurs de l'entreprise
      }
    });
  }

  async findAllEntreprises(): Promise<Entreprises[]> {
    return await prismaGlobal.entreprises.findMany({
      include: {
        users: true,
        _count: {
          select: {
            users: true
          }
        }
      }
    });
  }

  async findEntrepriseById(id: number): Promise<Entreprises | null> {
    return await prismaGlobal.entreprises.findUnique({ 
      where: { id },
      include: {
        users: true,
        _count: {
          select: {
            users: true
          }
        }
      }
    });
  }

  async updateEntreprise(id: number, data: Partial<Omit<Entreprises, "id">>): Promise<Entreprises> {
    return await prismaGlobal.entreprises.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      },
      include: {
        users: true
      }
    });
  }

  async deleteEntreprise(id: number): Promise<void> {
    // Attention : supprimer d'abord les utilisateurs ou les déplacer
    await prismaGlobal.users.deleteMany({
      where: { entrepriseId: id }
    });
    
    await prismaGlobal.entreprises.delete({
      where: { id }
    });
  }
}