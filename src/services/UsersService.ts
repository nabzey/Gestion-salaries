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

  async create(user: Omit<Users, "id">, caller: { role: string; entrepriseId?: number | null; id: number }) {
    
    if (caller.role === "SUPER_ADMIN") {
      return await this.globalRepos.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      });
    }

    if (caller.role === "ADMIN") {
      if (user.role !== "CAISSIER") {
        throw new Error("Accès refusé : Un admin ne peut créer que des caissiers");
      }

      if (!caller.entrepriseId) {
        throw new Error("Erreur : Admin non associé à une entreprise");
      }

      if (user.entrepriseId !== caller.entrepriseId) {
        throw new Error("Accès refusé : Le caissier doit être lié à votre entreprise");
      }

      return await this.globalRepos.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      });
    }

    throw new Error("Accès refusé : Privilèges insuffisants pour créer un utilisateur");
  }

  async loginUser(perso: { email: string; password: string }) {
    let user = await this.globalRepos.findByEmail(perso.email);

    if (!user) throw new Error("Utilisateur non trouvé");

    const isPassValid = await bcrypt.compare(perso.password, user.password);
    if (!isPassValid) throw new Error("Mot de passe incorrect");

    const role = user.role;

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

    return { user: { id: user.id, email: user.email, role: user.role, nom: user.nom }, accesToken, refreshToken };
  }

  async createEntreprise(data: Omit<Entreprises, "id"> & { adminNom?: string; adminEmail?: string; adminPassword?: string; caissierNom?: string; caissierEmail?: string; caissierPassword?: string }, userId: number) {
    const user = await this.globalRepos.findById(userId);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }
    
    if (user.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Seul un Super Admin peut créer des entreprises");
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

    // Création automatique de l'admin de l'entreprise si les données sont fournies
    if (data.adminNom && data.adminEmail && data.adminPassword) {
      const adminData = {
        email: data.adminEmail,
        password: data.adminPassword,
        role: "ADMIN" as const,
        nom: data.adminNom,
        entrepriseId: entreprise.id
      } as Omit<Users, "id">;

      await this.create(adminData, { role: "SUPER_ADMIN", entrepriseId: null, id: userId });
    }

    // Création automatique du caissier de l'entreprise si les données sont fournies
    if (data.caissierNom && data.caissierEmail && data.caissierPassword) {
      const caissierData = {
        email: data.caissierEmail,
        password: data.caissierPassword,
        role: "CAISSIER" as const,
        nom: data.caissierNom,
        entrepriseId: entreprise.id
      } as Omit<Users, "id">;

      await this.create(caissierData, { role: "SUPER_ADMIN", entrepriseId: null, id: userId });
    }

    return entreprise;
  }

  async getAllEntreprises(user: { role: string; entrepriseId?: number | null; id: number }) {
    // SUPER_ADMIN voit toutes les entreprises
    if (user.role === "SUPER_ADMIN") {
      return await this.globalRepos.findAllEntreprises();
    } 
    
    // ADMIN voit seulement son entreprise
    if (user.role === "ADMIN" && user.entrepriseId) {
      const entreprise = await this.globalRepos.findEntrepriseById(user.entrepriseId);
      return entreprise ? [entreprise] : [];
    }

    // CAISSIER ne voit rien ou peut voir son entreprise selon vos besoins
    return [];
  }

  // Nouvelle méthode pour récupérer les utilisateurs d'une entreprise
  async getUsersByEntreprise(caller: { role: string; entrepriseId?: number | null; id: number }, entrepriseId?: number) {
    if (caller.role === "SUPER_ADMIN") {
      // SUPER_ADMIN peut voir les utilisateurs de n'importe quelle entreprise
      if (entrepriseId) {
        return await this.globalRepos.findUsersByEntrepriseId(entrepriseId);
      }
      return await this.globalRepos.findAllUsers();
    }
    
    if (caller.role === "ADMIN" && caller.entrepriseId) {
      // ADMIN peut voir seulement les utilisateurs de son entreprise
      return await this.globalRepos.findUsersByEntrepriseId(caller.entrepriseId);
    }

    throw new Error("Accès refusé");
  }

  async getAdminsAndCaissiers(entrepriseId: number, caller: { role: string; entrepriseId?: number | null }) {
    if (caller.role === "SUPER_ADMIN" || caller.entrepriseId === entrepriseId) {
      const admins = await this.globalRepos.findUsersByEntrepriseIdAndRole(entrepriseId, "ADMIN");
      const caissiers = await this.globalRepos.findUsersByEntrepriseIdAndRole(entrepriseId, "CAISSIER");
      return { admins, caissiers };
    }
    throw new Error("Accès refusé");
  }
}