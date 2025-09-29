import { z } from "zod";

const RoleEnum = z.enum(["SUPER_ADMIN", "ADMIN", "CAISSIER"]);

const TypeContratEnum = z.enum(["JOURNALIER", "FIXE", "HONORAIRE"]);
const ModePaiementEnum = z.enum(["ESPECES", "VIREMENT_BANCAIRE", "ORANGE_MONEY", "WAVE"]);
const StatusPaiementEnum = z.enum(["PARTIEL", "TOTAL"]);
const StatusPayRunEnum = z.enum(["BROUILLON", "APPROUVE", "CLOTURE"]);
const StatusPayslipEnum = z.enum(["PAYE", "PARTIEL", "EN_ATTENTE"]);

export const userCreateSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(8, { message: "Mot de passe trop court (min 8 caractères)" }),
  role: RoleEnum,
  nom: z.string().min(1, { message: "Le nom est requis" }),
  entrepriseId: z.number().optional().nullable(),
}).refine((data) => {
  // Un SUPER_ADMIN n'a pas besoin d'entrepriseId
  if (data.role === "SUPER_ADMIN") {
    return data.entrepriseId === null || data.entrepriseId === undefined;
  }
  // Un ADMIN ou CAISSIER doit avoir un entrepriseId
  if (data.role === "ADMIN" || data.role === "CAISSIER") {
    return data.entrepriseId !== null && data.entrepriseId !== undefined;
  }
  return true;
}, {
  message: "Les ADMIN et CAISSIER doivent être associés à une entreprise, pas les SUPER_ADMIN",
  path: ["entrepriseId"],
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
  // Données pour créer l'admin automatiquement
  adminNom: z.string().min(1, { message: "Le nom de l'admin est requis" }).optional(),
  adminEmail: z.string().email({ message: "Email admin invalide" }).optional(),
  adminPassword: z.string().min(8, { message: "Mot de passe admin trop court (min 8 caractères)" }).optional(),
  // Données pour créer le caissier automatiquement
  caissierNom: z.string().min(1, { message: "Le nom du caissier est requis" }).optional(),
  caissierEmail: z.string().email({ message: "Email caissier invalide" }).optional(),
  caissierPassword: z.string().min(8, { message: "Mot de passe caissier trop court (min 8 caractères)" }).optional(),
}).refine((data) => {
  // Soit tous les champs admin sont fournis, soit aucun
  const hasAdminFields = Boolean(data.adminNom && data.adminEmail && data.adminPassword);
  const hasNoneAdmin = !data.adminNom && !data.adminEmail && !data.adminPassword;
  return hasAdminFields || hasNoneAdmin;
}, {
  message: "Tous les champs admin (nom, email, password) doivent être fournis ensemble ou aucun",
  path: ["adminNom"],
}).refine((data) => {
  // Soit tous les champs caissier sont fournis, soit aucun
  const hasCaissierFields = Boolean(data.caissierNom && data.caissierEmail && data.caissierPassword);
  const hasNoneCaissier = !data.caissierNom && !data.caissierEmail && !data.caissierPassword;
  return hasCaissierFields || hasNoneCaissier;
}, {
  message: "Tous les champs caissier (nom, email, password) doivent être fournis ensemble ou aucun",
  path: ["caissierNom"],
});

// Schéma pour la mise à jour d'une entreprise
export const entrepriseUpdateSchema = z.object({
  nom: z.string().min(1).optional(),
  logo: z.string().optional(),
  adresse: z.string().min(1).optional(),
  paiement: z.string().optional(),
});

// Schéma pour la mise à jour d'un utilisateur
export const userUpdateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  nom: z.string().min(1).optional(),
  role: RoleEnum.optional(),
  entrepriseId: z.number().optional().nullable(),
});

// Schéma pour créer un employé
export const employeeCreateSchema = z.object({
  nom: z.string().min(1, { message: "Le nom est requis" }),
  poste: z.string().min(1, { message: "Le poste est requis" }),
  typeContrat: TypeContratEnum,
  tauxSalaire: z.number().positive({ message: "Le taux salaire doit être positif" }),
  coordonneesBancaires: z.string().optional(),
  actif: z.boolean().optional(),
});

// Schéma pour mettre à jour un employé
export const employeeUpdateSchema = z.object({
  nom: z.string().min(1).optional(),
  poste: z.string().min(1).optional(),
  typeContrat: TypeContratEnum.optional(),
  tauxSalaire: z.number().positive().optional(),
  coordonneesBancaires: z.string().optional(),
  actif: z.boolean().optional(),
});

// Schéma pour créer un paiement
export const paymentCreateSchema = z.object({
  montant: z.number().positive({ message: "Le montant doit être positif" }),
  mode: ModePaiementEnum,
  date: z.string().datetime().optional(),
  payslipId: z.number().int().positive({ message: "ID bulletin invalide" }),
});

// Schéma pour mettre à jour un paiement
export const paymentUpdateSchema = z.object({
  montant: z.number().positive().optional(),
  mode: ModePaiementEnum.optional(),
  date: z.string().datetime().optional(),
  payslipId: z.number().int().positive().optional(),
});

// Schéma pour créer un cycle de paie
export const payRunCreateSchema = z.object({
  periode: z.string().datetime({ message: "Période invalide" }),
  type: z.string().min(1, { message: "Type requis" }),
  status: StatusPayRunEnum.optional(),
});

// Schéma pour mettre à jour un cycle de paie
export const payRunUpdateSchema = z.object({
  periode: z.string().datetime().optional(),
  type: z.string().min(1).optional(),
  status: StatusPayRunEnum.optional(),
});

// Schéma pour mettre à jour un bulletin de paie
export const payslipUpdateSchema = z.object({
  brut: z.number().positive().optional(),
  deductions: z.number().min(0).optional(),
  net: z.number().positive().optional(),
  status: StatusPayslipEnum.optional(),
});

// Types inférés
export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserLoginInput = z.infer<typeof userLoginSchema>;
export type EntrepriseCreateInput = z.infer<typeof entrepriseCreateSchema>;
export type EntrepriseUpdateInput = z.infer<typeof entrepriseUpdateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
export type EmployeeCreateInput = z.infer<typeof employeeCreateSchema>;
export type EmployeeUpdateInput = z.infer<typeof employeeUpdateSchema>;
export type PaymentCreateInput = z.infer<typeof paymentCreateSchema>;
export type PaymentUpdateInput = z.infer<typeof paymentUpdateSchema>;
export type PayRunCreateInput = z.infer<typeof payRunCreateSchema>;
export type PayRunUpdateInput = z.infer<typeof payRunUpdateSchema>;
export type PayslipUpdateInput = z.infer<typeof payslipUpdateSchema>;
