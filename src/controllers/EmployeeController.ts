import { Request, Response } from 'express';
import { EmployeeService } from '../services/EmployeeService';
import { employeeCreateSchema, employeeUpdateSchema } from '../validators/validate';
import { PrismaClient } from '@prisma/client';

const globalPrisma = new PrismaClient();

export class EmployeeController {
  private service = new EmployeeService();

  async create(req: Request, res: Response) {
    try {
      const validatedData = employeeCreateSchema.parse(req.body);

      // If super admin, allow specifying entrepriseId and get dbName accordingly
      let dbName = req.user?.dbName;
      if (req.user?.role === 'SUPER_ADMIN') {
        if (!validatedData.entrepriseId) {
          return res.status(400).json({ message: 'L\'entrepriseId est requis pour le Super Admin' });
        }
        const entreprise = await globalPrisma.entreprises.findUnique({
          where: { id: validatedData.entrepriseId },
          select: { dbName: true }
        });
        if (!entreprise) {
          return res.status(400).json({ message: 'Entreprise non trouvée' });
        }
        if (!entreprise.dbName) {
          return res.status(400).json({ message: 'BD tenant non configurée pour cette entreprise' });
        }
        dbName = entreprise.dbName;
      } else {
        if (!dbName) {
          return res.status(400).json({ message: 'BD tenant non trouvée' });
        }
      }

      const { entrepriseId, ...rest } = validatedData;
      const employeeData = {
        ...rest,
        coordonneesBancaires: validatedData.coordonneesBancaires || null,
        actif: validatedData.actif ?? true,
        joursTravailles: null,
      };

      const employee = await this.service.create(employeeData, dbName);
      res.status(201).json(employee);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const filters: any = {};
      if (req.query.poste) filters.poste = req.query.poste as string;
      if (req.query.typeContrat) filters.typeContrat = req.query.typeContrat as any;
      if (req.query.actif === 'true') filters.actif = true;
      if (req.query.actif === 'false') filters.actif = false;

      let dbName = req.user?.dbName;
      let entreprise: any = null;

      // For SUPER_ADMIN, allow fetching from a specific entreprise via query param
      if (req.user?.role === 'SUPER_ADMIN' && !dbName && req.query.entrepriseId) {
        const entrepriseId = parseInt(req.query.entrepriseId as string);
        entreprise = await globalPrisma.entreprises.findUnique({
          where: { id: entrepriseId },
          select: { dbName: true }
        });
        if (!entreprise || !entreprise.dbName) {
          return res.status(400).json({ message: 'Entreprise non trouvée ou BD tenant non configurée' });
        }
        dbName = entreprise.dbName;
      }

      // For SUPER_ADMIN, if still no dbName, use the first entreprise's dbName
      if (req.user?.role === 'SUPER_ADMIN' && !dbName) {
        const firstEntreprise = await globalPrisma.entreprises.findFirst({
          select: { dbName: true }
        });
        if (firstEntreprise && firstEntreprise.dbName) {
          dbName = firstEntreprise.dbName;
        } else {
          return res.status(400).json({ message: 'Aucune entreprise avec BD tenant configurée' });
        }
      }

      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const employees = await this.service.findAll(filters, dbName);
      res.json(employees);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const employee = await this.service.findById(id, dbName);
      if (!employee) {
        return res.status(404).json({ message: 'Employé non trouvé' });
      }
      res.json(employee);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const validatedData = employeeUpdateSchema.parse(req.body);
      const dbName = req.user?.dbName;
      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const updateData: any = {};
      if (validatedData.nom !== undefined) updateData.nom = validatedData.nom;
      if (validatedData.poste !== undefined) updateData.poste = validatedData.poste;
      if (validatedData.typeContrat !== undefined) updateData.typeContrat = validatedData.typeContrat;
      if (validatedData.tauxSalaire !== undefined) updateData.tauxSalaire = validatedData.tauxSalaire;
      if (validatedData.coordonneesBancaires !== undefined) updateData.coordonneesBancaires = validatedData.coordonneesBancaires || null;
      if (validatedData.actif !== undefined) updateData.actif = validatedData.actif;

      const employee = await this.service.update(id, updateData, dbName);
      res.json(employee);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const employee = await this.service.delete(id, dbName);
      res.json(employee);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async toggleActif(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const dbName = req.user?.dbName;
      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const employee = await this.service.toggleActif(id, dbName);
      res.json(employee);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
