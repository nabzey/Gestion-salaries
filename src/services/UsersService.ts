import { Users, Entreprises } from "@prisma/client";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

import { UsersRepository } from "../repositories/UsersRepository";

export class UsersService {
  private globalRepos = new UsersRepository();

  async findUser(id: number, isSuperAdmin = false) {
    if (isSuperAdmin) {
      return await this.globalRepos.findById(id);
    }
  }

  async create(user: Omit<Users, "id">, caller: { role: string; entrepriseId?: number | null }) {
    // Seul un super-admin peut créer n'importe quel rôle, un admin ne peut créer que des caissiers pour son entreprise
    if (caller.role === "SUPER_ADMIN") {
      // Super-admin : tout rôle autorisé
      return await this.globalRepos.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      });
    }
    if (caller.role === "ADMIN") {
      if (user.role !== "CAISSIER") {
        throw new Error("Accès refusé : Un admin ne peut créer que des caissiers");
      }
      if (!caller.entrepriseId || user.entrepriseId !== caller.entrepriseId) {
        throw new Error("Accès refusé : Le caissier doit être lié à la même entreprise que l'admin");
      }
      return await this.globalRepos.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      });
    }
    throw new Error("Accès refusé : Rôle insuffisant");
  }

  async loginUser(perso: { email: string; password: string}) {
    let user = await this.globalRepos.findByEmail(perso.email);

    if (!user) throw new Error("Utilisateur non trouvé");

    const isPassValid = await bcrypt.compare(perso.password, user.password);
    if (!isPassValid) throw new Error("Mot de passe incorrect");

    const role = user.role; // Utilise le rôle tel qu'il est en BDD (majuscules)

    const accesToken = Jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: role,
        entrepriseId: user.entrepriseId
      },
      process.env.JWT_SECRETE as string,
      { expiresIn: "1h" }
    );

    const refreshToken = Jwt.sign(
      {
        email: user.email,
        role: role
      },
      process.env.JWT_SECRETE as string,
      { expiresIn: "1d" }
    );

    return { user, accesToken, refreshToken };
  }

  async createEntreprise(data: Omit<Entreprises, "id"> & { adminNom?: string; adminEmail?: string; adminPassword?: string }, userId: number) {
    const user = await this.globalRepos.findById(userId);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }
    if (user.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Super Admin requis");
    }
    const entrepriseData = {
      nom: data.nom,
      logo: data.logo ?? null,
      adresse: data.adresse,
      paiement: data.paiement || "XOF",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const entreprise = await this.globalRepos.createEntreprise(entrepriseData);
    // Création stricte de l'admin lié à l'entreprise
    if (data.adminNom && data.adminEmail && data.adminPassword) {
      await this.create({
        email: data.adminEmail,
        password: data.adminPassword,
        role: "ADMIN",
        nom: data.adminNom,
        entrepriseId: entreprise.id
      } as Omit<Users, "id">, { role: "SUPER_ADMIN" });
    }
    return entreprise;
  }

  async getAllEntreprises(user: { role: string; entrepriseId?: number | null; id: number }) {
    if (user.role === "SUPER_ADMIN") {
      return await this.globalRepos.findAllEntreprises();
    } else {
      if (user.entrepriseId) {
        const entreprise = await this.globalRepos.findEntrepriseById(user.entrepriseId);
        return entreprise ? [entreprise] : [];
      }
      return [];
    }
  }
}