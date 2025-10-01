import { Users, Entreprises } from "@prisma/client";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import mysql from 'mysql2/promise';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

import { getTenantPrisma } from "../utils/tenantPrisma";
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
    let dbName: string | null = null;
    let entreprisePayload: any = null;

    if (user.entrepriseId) {
      const entreprise = await this.globalRepos.findEntrepriseById(user.entrepriseId);
      dbName = entreprise?.dbName || null;
      if (entreprise) {
        entreprisePayload = {
          id: entreprise.id,
          nom: entreprise.nom,
          logo: entreprise.logo,
          adresse: entreprise.adresse,
          paiement: entreprise.paiement,
          dbName: entreprise.dbName,
        };
      }
    }

    const accesToken = Jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: role,
        entrepriseId: user.entrepriseId,
        dbName: dbName || null,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    const refreshToken = Jwt.sign(
      {
        email: user.email,
        role: role
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    const userPayload: any = { id: user.id, email: user.email, role: user.role, nom: user.nom };
    if (entreprisePayload) {
      userPayload.entreprise = entreprisePayload;
    }

    return { user: userPayload, accesToken, refreshToken };
  }

  async createEntreprise(data: Omit<Entreprises, "id"> & { adminNom?: string; adminEmail?: string; adminPassword?: string; caissierNom?: string; caissierEmail?: string; caissierPassword?: string }, userId: number) {
    const user = await this.globalRepos.findById(userId);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    if (user.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Seul un Super Admin peut créer des entreprises");
    }

    // Générer le nom de la DB tenant
    const tempEntreprise = { id: Date.now() }; // temporaire pour générer dbName
    const dbName = `tenant_${tempEntreprise.id}`;

    // Créer la DB tenant
    const parsed = new URL(process.env.DATABASE_URL!);
    const dbUser = parsed.username;
    const dbPass = decodeURIComponent(parsed.password);
    const host = parsed.hostname;
    const port = parsed.port || '3306';
    const tenantUrl = `mysql://${dbUser}:${encodeURIComponent(dbPass)}@${host}:${port}/${dbName}`;

    try {
      console.log('[CREATE ENTREPRISE] Connexion MySQL pour création DB', { host, dbUser, port, dbName });
      const connection = await mysql.createConnection({
        host: host,
        user: dbUser,
        password: dbPass,
        port: parseInt(port),
      });
      await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
      await connection.end();
      console.log('[CREATE ENTREPRISE] Base de données créée ou déjà existante');
    } catch (error) {
      console.error('[CREATE ENTREPRISE] Erreur création DB:', error);
      if (error instanceof Error) {
        throw new Error('Failed to create tenant DB: ' + error.message + '\nStack: ' + error.stack);
      } else {
        throw new Error('Failed to create tenant DB: ' + JSON.stringify(error));
      }
    }

    try {
      // Utiliser une variable locale pour éviter de modifier process.env globalement
      console.log('[CREATE ENTREPRISE] Push Prisma sur DB tenant', tenantUrl);
      execSync(`npx prisma db push --schema=./prisma/tenant-schema.prisma --accept-data-loss`, {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: tenantUrl, TENANT_DATABASE_URL: tenantUrl }
      });
      console.log('[CREATE ENTREPRISE] Prisma push terminé');
    } catch (error) {
      console.error('[CREATE ENTREPRISE] Erreur Prisma push:', error);
      throw new Error('Failed to initialize tenant DB: ' + (error as Error).message);
    }

    // Créer l'entreprise avec le dbName
    const entrepriseData = {
      nom: data.nom,
      logo: data.logo ?? null,
      adresse: data.adresse,
      paiement: data.paiement || "XOF",
      dbName: dbName,
      createdAt: new Date(),
      updatedAt: new Date()
    } as any;

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

    // Initialiser les données par défaut (employés, etc.)
    try {
      await this.initEntrepriseData(entreprise.id, { role: 'SUPER_ADMIN', entrepriseId: null, id: userId });
    } catch (error) {
      console.error('Erreur lors de l\'initialisation des données de l\'entreprise:', error);
      // Ne pas échouer la création
    }

    return entreprise; // Retour explicite pour le contrôleur
  }

  async getAllEntreprises(user: { role: string; entrepriseId?: number | null; id: number }) {
    if (user.role === "SUPER_ADMIN") {
      const entreprises = await this.globalRepos.findAllEntreprises();
      // Ajouter le nombre d'employés pour chaque entreprise
      const entreprisesWithEmployees = await Promise.all(
        entreprises.map(async (entreprise) => {
          let employeeCount = 0;
          if (entreprise.dbName) {
            try {
              const tenant = getTenantPrisma(entreprise.dbName);
              employeeCount = await tenant.employee.count();
            } catch (error) {
              console.error(`Erreur récupération employés pour ${entreprise.nom}:`, error);
            }
          }
          return {
            ...entreprise,
            _count: {
              ...(entreprise as any)._count,
              employees: employeeCount
            }
          };
        })
      );
      return entreprisesWithEmployees;
    }

    if (user.role === "ADMIN" && user.entrepriseId) {
      const entreprise = await this.globalRepos.findEntrepriseById(user.entrepriseId);
      if (entreprise && entreprise.dbName) {
        try {
          const tenant = getTenantPrisma(entreprise.dbName);
          const employeeCount = await tenant.employee.count();
          return [{
            ...entreprise,
            _count: {
              ...(entreprise as any)._count,
              employees: employeeCount
            }
          }];
        } catch (error) {
          console.error(`Erreur récupération employés pour ${entreprise.nom}:`, error);
          return [entreprise];
        }
      }
      return entreprise ? [entreprise] : [];
    }

    return [];
  }

  async getUsersByEntreprise(caller: { role: string; entrepriseId?: number | null; id: number }, entrepriseId?: number) {
    if (caller.role === "SUPER_ADMIN") {
      if (entrepriseId) {
        return await this.globalRepos.findUsersByEntrepriseId(entrepriseId);
      }
      return await this.globalRepos.findAllUsers();
    }

    if (caller.role === "ADMIN" && caller.entrepriseId) {
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

  async getEntreprisePersonnel(entrepriseId: number, caller: { role: string; entrepriseId?: number | null }) {
    if (caller.role !== 'SUPER_ADMIN' && caller.entrepriseId !== entrepriseId) {
      throw new Error('Accès refusé');
    }
    const entreprise = await this.globalRepos.findEntrepriseById(entrepriseId);
    if (!entreprise || !entreprise.dbName) throw new Error('Entreprise introuvable');

    const admins = await this.globalRepos.findUsersByEntrepriseIdAndRole(entrepriseId, 'ADMIN');
    const caissiers = await this.globalRepos.findUsersByEntrepriseIdAndRole(entrepriseId, 'CAISSIER');

    const tenant = getTenantPrisma(entreprise.dbName);
    const employees = await tenant.employee.findMany();

    return { admins, caissiers, employees };
  }

  async initEntrepriseData(
    entrepriseId: number,
    caller: { role: string; entrepriseId?: number | null; id: number }
  ) {
    if (caller.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Super Admin requis");
    }

    const entreprise = await this.globalRepos.findEntrepriseById(entrepriseId);
    if (!entreprise) throw new Error("Entreprise non trouvée");
    if (!entreprise.dbName) throw new Error("dbName manquant pour cette entreprise");

    const tenant = getTenantPrisma(entreprise.dbName);

    const existingEmp = await tenant.employee.count();
    if (existingEmp > 0) {
      const counts = {
        employees: existingEmp,
        payRuns: await tenant.payRun.count(),
        payslips: await tenant.payslip.count(),
        payments: await tenant.payment.count(),
      };
      return { initialized: false, message: "Données déjà présentes", counts };
    }

    await tenant.employee.createMany({
      data: [
        { nom: "Alpha Ndiaye", poste: "Développeur", typeContrat: "FIXE", tauxSalaire: '250000', joursTravailles: null, coordonneesBancaires: null, actif: true },
        { nom: "Awa Diop", poste: "Comptable", typeContrat: "FIXE", tauxSalaire: '200000', joursTravailles: null, coordonneesBancaires: null, actif: true },
        { nom: "Mamadou Sow", poste: "Agent", typeContrat: "JOURNALIER", tauxSalaire: '10000', joursTravailles: 20, coordonneesBancaires: null, actif: true },
      ]
    });

    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const payRun = await tenant.payRun.create({
      data: { periode: startOfMonth, type: "MENSUEL" }
    });

    const employees = await tenant.employee.findMany();
    for (const emp of employees) {
      const brut = (emp as any).tauxSalaire;
      const deductions: any = 0;
      await tenant.payslip.create({
        data: {
          employeeId: emp.id,
          payRunId: payRun.id,
          brut: brut as any,
          deductions: deductions,
          net: brut as any,
        }
      });
    }

    const result = {
      employees: await tenant.employee.count(),
      payRuns: await tenant.payRun.count(),
      payslips: await tenant.payslip.count(),
    };

    return { initialized: true, message: "Initialisation terminée", counts: result };
  }

  async getGlobalStats(user: { role: string; entrepriseId?: number | null; id: number }) {
    if (user.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Super Admin requis");
    }

    const entreprises = await this.globalRepos.findAllEntreprises();
    const totalEntreprises = entreprises.length;
    const entreprisesActives = entreprises.length; // Toutes sont actives pour l'instant

    let totalEmployes = 0;
    for (const entreprise of entreprises) {
      if (entreprise.dbName) {
        try {
          const tenant = getTenantPrisma(entreprise.dbName);
          const count = await tenant.employee.count();
          totalEmployes += count;
        } catch (error) {
          console.error(`Erreur comptage employés pour ${entreprise.nom}:`, error);
        }
      }
    }

    // Pour le CA total, on pourrait calculer basé sur les salaires, mais pour l'instant on met 0
    const caTotal = 0;

    return {
      totalEntreprises,
      entreprisesActives,
      totalEmployes,
      caTotal
    };
  }

  async impersonateEntreprise(entrepriseId: number, caller: { role: string; id: number }) {
    if (caller.role !== "SUPER_ADMIN") {
      throw new Error("Accès refusé : Super Admin requis");
    }

    const entreprise = await this.globalRepos.findEntrepriseById(entrepriseId);
    if (!entreprise || !entreprise.dbName) {
      throw new Error("Entreprise introuvable ou dbName manquant");
    }

    const currentUser = await this.globalRepos.findById(caller.id);

    const accesToken = Jwt.sign(
      {
        id: caller.id,
        email: currentUser?.email || "",
        role: "SUPER_ADMIN",
        entrepriseId: entreprise.id,
        dbName: entreprise.dbName,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    const entreprisePayload = {
      id: entreprise.id,
      nom: entreprise.nom,
      logo: entreprise.logo,
      adresse: entreprise.adresse,
      paiement: entreprise.paiement,
      dbName: entreprise.dbName,
    };

    return { accesToken, entreprise: entreprisePayload };
  }
}
