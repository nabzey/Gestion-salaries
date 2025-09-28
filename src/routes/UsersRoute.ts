import Router from 'express';
import { UsersController } from '../controllers/UsersController';
import { authenticateToken, requireSuperAdmin, requireAdminOrSuperAdmin } from '../middleware/auth';

const cont = new UsersController();
const router = Router();

router.post('/auth', cont.login)
router.post('/', authenticateToken, requireAdminOrSuperAdmin, cont.createUser)
router.post('/entreprises', authenticateToken, requireSuperAdmin, cont.createEntreprise)
router.get('/entreprises', authenticateToken, requireSuperAdmin, cont.getEntreprises)
router.get('/entreprise/:id/utilisateurs', authenticateToken, cont.getAdminsAndCaissiers)
router.get('/entreprises/:entrepriseId/utilisateurs', authenticateToken, cont.getUsersByEntreprise)

export default router;
