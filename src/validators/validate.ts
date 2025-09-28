import { z } from "zod";

const RoleEnum = z.enum(["SUPER_ADMIN", "ADMIN", "CAISSIER"]);

export const userCreateSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "Mot de passe trop court (min 8 caractères)" }),
  role: RoleEnum,
  nom: z.string().min(1, { message: "Le nom est requis" }),
  entrepriseId: z.number().optional().nullable(),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const entrepriseCreateSchema = z.object({
  nom: z.string().min(1, { message: "Le nom de l'entreprise est requis" }),
  logo: z.string().optional(),
  adresse: z.string().min(1, { message: "L'adresse est requise" }),
  paiement: z.string().default("XOF"),
});

// Exemple d'inférence du type TypeScript à partir du schéma
export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserLoginInput = z.infer<typeof userLoginSchema>;
export type EntrepriseCreateInput = z.infer<typeof entrepriseCreateSchema>;
