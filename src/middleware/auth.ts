import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import { Users } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: string; // Format du token JWT
        entrepriseId?: number | null; // Peut être null comme dans Prisma
      };
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  Jwt.verify(token, process.env.JWT_SECRETE as string, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide' });
    }

    req.user = decoded as Users;
    next();
  });
};

export const requireSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
  // Accepte super-admin et admin
  if (!req.user || (req.user.role !== 'super-admin' && req.user.role !== 'admin')) {
    return res.status(403).json({ message: 'Accès refusé : Super Admin ou Admin requis' });
  }
  next();
};