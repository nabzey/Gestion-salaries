import Router from 'express';
import { EmployeeController } from '../controllers/EmployeeController';
import { authenticateToken, requireAdminOrSuperAdmin, requireAdminOrCaissier } from '../middleware/auth';

const cont = new EmployeeController();
const router = Router();

// Protéger toutes les routes avec authentification
router.use(authenticateToken);

// Routes pour ADMIN ou SUPER_ADMIN
router.post('/', requireAdminOrSuperAdmin, cont.create.bind(cont));
router.put('/:id', requireAdminOrSuperAdmin, cont.update.bind(cont));
router.delete('/:id', requireAdminOrSuperAdmin, cont.delete.bind(cont));

// Routes pour ADMIN ou CAISSIER
router.get('/', requireAdminOrCaissier, cont.getAll.bind(cont));
router.get('/:id', requireAdminOrCaissier, cont.getById.bind(cont));
router.patch('/:id/toggle', requireAdminOrSuperAdmin, cont.toggleActif.bind(cont));

export default router;
