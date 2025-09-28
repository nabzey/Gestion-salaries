import Router from 'express';
import { UsersController } from '../controllers/UsersController';
import { authenticateToken, requireSuperAdmin } from '../middleware/auth';

const cont = new UsersController();
const router = Router();


router.post('/',cont.createUser)
router.post('/auth',cont.login)

// Routes protégées
router.post('/entreprises', authenticateToken, requireSuperAdmin, cont.createEntreprise)
router.get('/entreprises', authenticateToken, cont.getEntreprises)

export default router;
