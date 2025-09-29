import { Request, Response } from 'express';
import { EmployeeService } from '../services/EmployeeService';
import { employeeCreateSchema, employeeUpdateSchema } from '../validators/validate';

export class EmployeeController {
  private service = new EmployeeService();

  async create(req: Request, res: Response) {
    try {
      const validatedData = employeeCreateSchema.parse(req.body);
      const dbName = req.user?.dbName;
      if (!dbName) {
        return res.status(400).json({ message: 'BD tenant non trouvée' });
      }

      const employeeData = {
        ...validatedData,
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
      const dbName = req.user?.dbName;
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
