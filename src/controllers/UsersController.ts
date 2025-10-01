import { NextFunction, Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { userCreateSchema, userLoginSchema, entrepriseCreateSchema } from "../validators/validate";

const service = new UsersService();

export class UsersController {

    async createUser(req: Request, res: Response) {
        const users = userCreateSchema.safeParse(req.body);
        if (!users.success) return res.status(400).json({ message: "error", error: users.error.format() });

        try {
            const caller = req.user!;
            const newUser = await service.create(req.body, caller);
            res.status(200).json({
                message: "Utilisateur créé avec succès",
                data: newUser
            });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async createEntreprise(req: Request, res: Response) {
        const entreprise = entrepriseCreateSchema.safeParse(req.body);
        if (!entreprise.success) return res.status(400).json({ message: "Validation error", details: entreprise.error.format() });

        try {
            if (req.user!.role !== 'SUPER_ADMIN') {
                return res.status(403).json({ message: "Seul un Super Admin peut créer des entreprises" });
            }

            const entrepriseCreated = await service.createEntreprise(req.body, req.user!.id);
            res.status(200).json({
                message: "Entreprise créée avec succès",
                data: entrepriseCreated
            });
        } catch (error: any) {
            console.error("Create entreprise error:", error);
            res.status(500).json({ message: "Server error", details: error.message });
        }
    }

    async getEntreprises(req: Request, res: Response) {
        try {
            const entreprises = await service.getAllEntreprises(req.user!);
            res.status(200).json({
                message: "Entreprises récupérées",
                data: entreprises
            });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req: Request, res: Response) {
        const verif = userLoginSchema.safeParse(req.body);
        if (!verif.success) return res.status(401).json({ message: "invalide", error: verif.error.format() });

        try {
            const loginResult = await service.loginUser(req.body);
            res.status(200).json({
                message: 'Connexion réussie',
                data: loginResult
            });
        } catch (error: any) {
            res.status(401).json({ message: error.message });
        }
    }

    async getAdminsAndCaissiers(req: Request, res: Response) {
        const entrepriseId = Number(req.params.id);
        if (!entrepriseId) return res.status(400).json({ message: "Id d'entreprise invalide" });
        try {
            const result = await service.getAdminsAndCaissiers(entrepriseId, req.user!);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async getUsersByEntreprise(req: Request, res: Response) {
        try {
            const entrepriseId = req.params.entrepriseId ? parseInt(req.params.entrepriseId) : undefined;
            const users = await service.getUsersByEntreprise(req.user!, entrepriseId);
            res.status(200).json({
                message: "Utilisateurs récupérés",
                data: users
            });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async initEntrepriseData(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!id) return res.status(400).json({ message: "Id d'entreprise invalide" });
        try {
            const result = await service.initEntrepriseData(id, req.user!);
            res.status(200).json({ message: "Initialisation effectuée", data: result });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async impersonateEntreprise(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!id) return res.status(400).json({ message: "Id d'entreprise invalide" });
        try {
            const result = await service.impersonateEntreprise(id, { role: req.user!.role, id: req.user!.id });
            res.status(200).json({ message: "Contexte entreprise établi", data: result });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async getEntreprisePersonnel(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!id) return res.status(400).json({ message: "Id d'entreprise invalide" });
        try {
            const result = await service.getEntreprisePersonnel(id, req.user!);
            res.status(200).json({ message: "Personnel récupéré", data: result });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }

    async getGlobalStats(req: Request, res: Response) {
        try {
            const stats = await service.getGlobalStats(req.user!);
            res.status(200).json({ message: "Statistiques récupérées", data: stats });
        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }
}
