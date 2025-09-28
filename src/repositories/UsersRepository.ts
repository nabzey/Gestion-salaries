import { Users, Entreprises, PrismaClient } from "@prisma/client";

const prismaGlobal = new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_URL ?? "" }
  }
});

export class UsersRepository {
  async findById(id: number): Promise<Users | null> {
    return await prismaGlobal.users.findUnique({ where: { id } });
  }

  async create(data: Omit<Users, "id">): Promise<Users> {
    return await prismaGlobal.users.create({ data });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await prismaGlobal.users.findUnique({ where: { email } });
  }

  async createEntreprise(data: Omit<Entreprises, "id">): Promise<Entreprises> {
    return await prismaGlobal.entreprises.create({ data });
  }

  async findAllEntreprises(): Promise<Entreprises[]> {
    return await prismaGlobal.entreprises.findMany();
  }

  async findEntrepriseById(id: number): Promise<Entreprises | null> {
    return await prismaGlobal.entreprises.findUnique({ where: { id } });
  }
}
