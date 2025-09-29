import Router from 'express';
import { PayslipController } from '../controllers/PayslipController';
import { authenticateToken, requireAdminOrSuperAdmin, requireAdminOrCaissier } from '../middleware/auth';

const cont = new PayslipController();
const router = Router();

// Routes pour ADMIN/SUPER_ADMIN (modification)
router.put('/:id', authenticateToken, requireAdminOrSuperAdmin, cont.update.bind(cont));
router.patch('/:id/status', authenticateToken, requireAdminOrSuperAdmin, cont.updateStatus.bind(cont));

// Routes pour lecture (ADMIN, CAISSIER, SUPER_ADMIN)
router.get('/', authenticateToken, requireAdminOrCaissier, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrCaissier, cont.getById.bind(cont));
router.get('/:id/pdf', authenticateToken, requireAdminOrCaissier, cont.generatePDF.bind(cont));

export default router;
