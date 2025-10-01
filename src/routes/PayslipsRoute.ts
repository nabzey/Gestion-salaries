import Router from 'express';
import { PayslipController } from '../controllers/PayslipController';
import { authenticateToken, requireAdminOrSuperAdminRestricted, requireAdminOrCaissier } from '../middleware/auth';

const cont = new PayslipController();
const router = Router();

// Routes pour ADMIN/SUPER_ADMIN (modification)
router.put('/:id', authenticateToken, requireAdminOrSuperAdminRestricted, cont.update.bind(cont));
router.patch('/:id/status', authenticateToken, requireAdminOrSuperAdminRestricted, cont.updateStatus.bind(cont));
router.post('/generate-monthly', authenticateToken, requireAdminOrSuperAdminRestricted, cont.generateMonthlyPayslips.bind(cont));

// Routes pour lecture (ADMIN, CAISSIER, SUPER_ADMIN)
router.get('/', authenticateToken, requireAdminOrCaissier, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrCaissier, cont.getById.bind(cont));
router.get('/:id/pdf', authenticateToken, requireAdminOrCaissier, cont.generatePDF.bind(cont));

export default router;
