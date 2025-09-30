import Router from 'express';
import { UsersController } from '../controllers/UsersController';
import { authenticateToken, requireSuperAdmin, requireAdminOrSuperAdmin } from '../middleware/auth';

const cont = new UsersController();
const router = Router();

router.post('/auth', cont.login.bind(cont))
router.post('/', authenticateToken, requireAdminOrSuperAdmin, cont.createUser.bind(cont))
router.post('/entreprises', authenticateToken, requireSuperAdmin, cont.createEntreprise.bind(cont))
router.get('/entreprises', authenticateToken, requireSuperAdmin, cont.getEntreprises.bind(cont))
router.post('/entreprises/:id/init', authenticateToken, requireSuperAdmin, cont.initEntrepriseData.bind(cont))
router.post('/entreprises/:id/impersonate', authenticateToken, requireSuperAdmin, cont.impersonateEntreprise.bind(cont))
router.get('/entreprise/:id/utilisateurs', authenticateToken, cont.getAdminsAndCaissiers.bind(cont))
router.get('/entreprise/:id/personnel', authenticateToken, cont.getEntreprisePersonnel.bind(cont))
router.get('/entreprises/:entrepriseId/utilisateurs', authenticateToken, cont.getUsersByEntreprise.bind(cont))

export default router;
