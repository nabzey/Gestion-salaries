import { Users, Entreprises, PrismaClient } from "@prisma/client";

export class UsersRepository {
  private prisma = new PrismaClient();
  async findById(id: number): Promise<Users | null> {
    return await this.prisma.users.findUnique({
      where: { id },
      include: {
        entreprise: true // Inclure les données de l'entreprise si nécessaire
      }
    });
  }

  async create(data: Omit<Users, "id">): Promise<Users> {
    return await this.prisma.users.create({
      data,
      include: {
        entreprise: true
      }
    });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await this.prisma.users.findUnique({
      where: { email },
      include: {
        entreprise: true
      }
    });
  }

  async findAllUsers(): Promise<Users[]> {
    return await this.prisma.users.findMany({
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByEntrepriseId(entrepriseId: number): Promise<Users[]> {
    return await this.prisma.users.findMany({
      where: { entrepriseId },
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByRole(role: string): Promise<Users[]> {
    return await this.prisma.users.findMany({
      where: {
        role: role as any // Cast to 'any' or replace with the correct enum type, e.g. 'Role'
      },
      include: {
        entreprise: true
      }
    });
  }

  async findUsersByEntrepriseIdAndRole(entrepriseId: number, role: "ADMIN" | "CAISSIER"): Promise<Users[]> {
    return await this.prisma.users.findMany({
      where: { entrepriseId, role }
    });
  }

  // Méthodes pour les entreprises
  async createEntreprise(data: Omit<Entreprises, "id">): Promise<Entreprises> {
    return await this.prisma.entreprises.create({
      data,
      include: {
        users: true // Inclure les utilisateurs de l'entreprise
      }
    });
  }

  async findAllEntreprises(): Promise<Entreprises[]> {
    return await this.prisma.entreprises.findMany({
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
    return await this.prisma.entreprises.findUnique({
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
    return await this.prisma.entreprises.update({
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
    await this.prisma.users.deleteMany({
      where: { entrepriseId: id }
    });

    await this.prisma.entreprises.delete({
      where: { id }
    });
  }
}
