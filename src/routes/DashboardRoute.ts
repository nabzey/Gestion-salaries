import Router from 'express';
import { DashboardController } from '../controllers/DashboardController';
import { authenticateToken, requireAdminOrCaissier } from '../middleware/auth';

const cont = new DashboardController();
const router = Router();

router.get('/', authenticateToken, requireAdminOrCaissier, cont.getDashboard.bind(cont));

export default router;
