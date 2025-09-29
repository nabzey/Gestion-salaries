import Router from 'express';
import { PayRunController } from '../controllers/PayRunController';
import { authenticateToken, requireAdminOrSuperAdmin, requireAdminOrCaissier } from '../middleware/auth';

const cont = new PayRunController();
const router = Router();

// Routes pour ADMIN/SUPER_ADMIN (création, modification, approbation)
router.post('/', authenticateToken, requireAdminOrSuperAdmin, cont.create.bind(cont));
router.put('/:id', authenticateToken, requireAdminOrSuperAdmin, cont.update.bind(cont));
router.delete('/:id', authenticateToken, requireAdminOrSuperAdmin, cont.delete.bind(cont));
router.post('/:id/generate-payslips', authenticateToken, requireAdminOrSuperAdmin, cont.generatePayslips.bind(cont));
router.post('/:id/approve', authenticateToken, requireAdminOrSuperAdmin, cont.approve.bind(cont));
router.post('/:id/close', authenticateToken, requireAdminOrSuperAdmin, cont.close.bind(cont));

// Routes pour lecture (ADMIN, CAISSIER, SUPER_ADMIN)
router.get('/', authenticateToken, requireAdminOrCaissier, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrCaissier, cont.getById.bind(cont));

export default router;
