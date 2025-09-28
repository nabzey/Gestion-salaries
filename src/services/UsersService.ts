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

  async create(user: Omit<Users, "id">, isSuperAdmin = false) {
    const pass = await bcrypt.hash(user.password, 10);

    const data = await this.globalRepos.create({
      ...user,
      password: pass
    });
    return data;
  }

  async loginUser(perso: { email: string; password: string}) {
    // Chercher dans global (tous les utilisateurs sont dans la DB globale pour l'instant)
    let user = await this.globalRepos.findByEmail(perso.email);

    if (!user) throw new Error("Utilisateur non trouvé");

    const isPassValid = await bcrypt.compare(perso.password, user.password);
    if (!isPassValid) throw new Error("Mot de passe incorrect");

    const role = user.role === "SUPER_ADMIN" ? "super-admin" : user.role === "ADMIN" ? "admin" : "caissier";

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

  async createEntreprise(data: Omit<Entreprises, "id">, userId: number) {
    // Correction: vérifier avec les formats utilisés dans le token
    const user = await this.globalRepos.findById(userId);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // Vérifier le rôle depuis la base de données (format original avec underscore)
    if (user.role !== "SUPER_ADMIN" && user.role !== "ADMIN") {
      throw new Error("Accès refusé : Super Admin ou Admin requis");
    }

    return await this.globalRepos.createEntreprise(data);
  }

  async getAllEntreprises(user: { role: string; entrepriseId?: number | null; id: number }) {
    if (user.role === "SUPER_ADMIN") {
      return await this.globalRepos.findAllEntreprises();
    } else {
      // Pour admin/caissier, retourner seulement leur entreprise
      if (user.entrepriseId) {
        const entreprise = await this.globalRepos.findEntrepriseById(user.entrepriseId);
        return entreprise ? [entreprise] : [];
      }
      return [];
    }
  }
}