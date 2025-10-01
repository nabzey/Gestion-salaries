import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const globalPrisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: string;
        entrepriseId?: number | null;
        dbName?: string | null;
      };
    }
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  Jwt.verify(token, process.env.JWT_SECRET as string, async (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide' });
    }

    req.user = decoded;

    // Add dbName if entrepriseId exists
    if (req.user && req.user.entrepriseId) {
      try {
        const entreprise = await globalPrisma.entreprises.findUnique({
          where: { id: req.user.entrepriseId },
          select: { dbName: true }
        });
        if (entreprise) {
          req.user.dbName = entreprise.dbName;
        }
      } catch (error) {
        console.error('Error fetching entreprise dbName:', error);
      }
    }

    next();
  });
};

// Middleware pour SUPER_ADMIN uniquement
export const requireSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'SUPER_ADMIN') {
    return res.status(403).json({ message: 'Accès refusé : Super Admin requis' });
  }
  next();
};

// Middleware pour ADMIN ou SUPER_ADMIN (ancien comportement, accès complet)
export const requireAdminOrSuperAdminRestricted = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(403).json({ message: 'Accès refusé : Authentification requise' });
  }
  if (req.user.role === 'ADMIN' || req.user.role === 'SUPER_ADMIN') {
    return next();
  }
  return res.status(403).json({ message: 'Accès refusé : Admin ou Super Admin requis' });
};

// Middleware pour ADMIN ou SUPER_ADMIN
export const requireAdminOrSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || (req.user.role !== 'SUPER_ADMIN' && req.user.role !== 'ADMIN')) {
    return res.status(403).json({ message: 'Accès refusé : Admin ou Super Admin requis' });
  }
  next();
};

// Middleware pour ADMIN, CAISSIER ou SUPER_ADMIN
export const requireAdminOrCaissier = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || (req.user.role !== 'ADMIN' && req.user.role !== 'CAISSIER' && req.user.role !== 'SUPER_ADMIN')) {
    return res.status(403).json({ message: 'Accès refusé : Admin, Caissier ou Super Admin requis' });
  }
  next();
};

// Middleware pour ADMIN, CAISSIER ou SUPER_ADMIN (ancien comportement, accès complet)
export const requireAdminOrCaissierRestricted = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(403).json({ message: 'Accès refusé : Authentification requise' });
  }
  if (req.user.role === 'ADMIN' || req.user.role === 'CAISSIER' || req.user.role === 'SUPER_ADMIN') {
    return next();
  }
  return res.status(403).json({ message: 'Accès refusé : Admin, Caissier ou Super Admin requis' });
};

// Middleware pour vérifier que l'ADMIN opère dans sa propre entreprise
export const requireSameEntreprise = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentification requise' });
  }

  // SUPER_ADMIN peut tout faire
  if (req.user.role === 'SUPER_ADMIN') {
    return next();
  }

  // ADMIN doit avoir une entrepriseId et elle doit correspondre à celle de l'utilisateur à créer
  if (req.user.role === 'ADMIN') {
    if (!req.user.entrepriseId) {
      return res.status(403).json({ message: 'Admin non associé à une entreprise' });
    }

    // Vérifier que l'utilisateur à créer appartient à la même entreprise
    if (req.body.entrepriseId && req.body.entrepriseId !== req.user.entrepriseId) {
      return res.status(403).json({ message: 'Vous ne pouvez créer des utilisateurs que pour votre entreprise' });
    }
  }

  next();
};
