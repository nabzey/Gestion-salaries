import { Users, Entreprises, PrismaClient, Prisma } from "@prisma/client";

export class UsersRepository {
  private static prismaInstance: PrismaClient;
  private prisma: PrismaClient;

  constructor() {
    // Singleton PrismaClient pour éviter d'ouvrir plusieurs connexions
    if (!UsersRepository.prismaInstance) {
      UsersRepository.prismaInstance = new PrismaClient();
    }
    this.prisma = UsersRepository.prismaInstance;
  }

  async findById(id: number): Promise<Users | null> {
    try {
      return await this.prisma.users.findUnique({
        where: { id },
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error findById:", error);
      throw error;
    }
  }

  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    try {
      return await this.prisma.users.create({
        data,
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error create user:", error);
      throw error;
    }
  }

  async findByEmail(email: string): Promise<Users | null> {
    try {
      return await this.prisma.users.findUnique({
        where: { email },
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error findByEmail:", error);
      throw error;
    }
  }

  async findAllUsers(): Promise<Users[]> {
    try {
      return await this.prisma.users.findMany({
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error findAllUsers:", error);
      throw error;
    }
  }

  async findUsersByEntrepriseId(entrepriseId: number): Promise<Users[]> {
    try {
      return await this.prisma.users.findMany({
        where: { entrepriseId },
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error findUsersByEntrepriseId:", error);
      throw error;
    }
  }

  async findUsersByRole(role: string): Promise<Users[]> {
    try {
      return await this.prisma.users.findMany({
        where: { role: role as any },
        include: { entreprise: true }
      });
    } catch (error) {
      console.error("Error findUsersByRole:", error);
      throw error;
    }
  }

  async findUsersByEntrepriseIdAndRole(
    entrepriseId: number,
    role: "ADMIN" | "CAISSIER"
  ): Promise<Users[]> {
    try {
      return await this.prisma.users.findMany({
        where: { entrepriseId, role }
      });
    } catch (error) {
      console.error("Error findUsersByEntrepriseIdAndRole:", error);
      throw error;
    }
  }

  async createEntreprise(data: Prisma.EntreprisesCreateInput): Promise<Entreprises> {
    try {
      return await this.prisma.entreprises.create({
        data,
        include: { users: true }
      });
    } catch (error) {
      console.error("Error createEntreprise:", error);
      throw error;
    }
  }

  async findAllEntreprises(): Promise<Entreprises[]> {
    try {
      return await this.prisma.entreprises.findMany({
        include: {
          users: true,
          _count: { select: { users: true } }
        }
      });
    } catch (error) {
      console.error("Error findAllEntreprises:", error);
      throw error;
    }
  }

  async findEntrepriseById(id: number): Promise<Entreprises | null> {
    try {
      return await this.prisma.entreprises.findUnique({
        where: { id },
        include: {
          users: true,
          _count: { select: { users: true } }
        }
      });
    } catch (error) {
      console.error("Error findEntrepriseById:", error);
      throw error;
    }
  }

  async updateEntreprise(id: number, data: Partial<Prisma.EntreprisesUpdateInput>): Promise<Entreprises> {
    try {
      return await this.prisma.entreprises.update({
        where: { id },
        data: {
          ...data,
          updatedAt: new Date()
        },
        include: { users: true }
      });
    } catch (error) {
      console.error("Error updateEntreprise:", error);
      throw error;
    }
  }

  async deleteEntreprise(id: number): Promise<void> {
    try {
      // Supprimer les utilisateurs liés d'abord
      await this.prisma.users.deleteMany({ where: { entrepriseId: id } });
      await this.prisma.entreprises.delete({ where: { id } });
    } catch (error) {
      console.error("Error deleteEntreprise:", error);
      throw error;
    }
  }
}
