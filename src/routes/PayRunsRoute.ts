import Router from 'express';
import { PayRunController } from '../controllers/PayRunController';
import { authenticateToken, requireAdminOrSuperAdminRestricted } from '../middleware/auth';

const cont = new PayRunController();
const router = Router();

// Routes pour ADMIN/SUPER_ADMIN
router.get('/', authenticateToken, requireAdminOrSuperAdminRestricted, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrSuperAdminRestricted, cont.getById.bind(cont));
router.patch('/:id/approve', authenticateToken, requireAdminOrSuperAdminRestricted, cont.approvePayRun.bind(cont));
router.patch('/:id/close', authenticateToken, requireAdminOrSuperAdminRestricted, cont.closePayRun.bind(cont));
router.get('/status/:status', authenticateToken, requireAdminOrSuperAdminRestricted, cont.getByStatus.bind(cont));
router.get('/period/:year/:month', authenticateToken, requireAdminOrSuperAdminRestricted, cont.getByPeriod.bind(cont));

export default router;
