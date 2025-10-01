import Router from 'express';
import { PaymentsController } from '../controllers/PaymentsController';
import { authenticateToken, requireAdminOrCaissierRestricted } from '../middleware/auth';

const cont = new PaymentsController();
const router = Router();

// Routes pour CAISSIER (enregistrement paiements)
router.post('/', authenticateToken, requireAdminOrCaissierRestricted, cont.create.bind(cont));
router.put('/:id', authenticateToken, requireAdminOrCaissierRestricted, cont.update.bind(cont));
router.delete('/:id', authenticateToken, requireAdminOrCaissierRestricted, cont.remove.bind(cont));

// Routes pour lecture (ADMIN, CAISSIER)
router.get('/', authenticateToken, requireAdminOrCaissierRestricted, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrCaissierRestricted, cont.getById.bind(cont));
router.get('/employee/:employeeId', authenticateToken, requireAdminOrCaissierRestricted, cont.getByEmployeeId.bind(cont));
router.get('/:id/pdf', authenticateToken, requireAdminOrCaissierRestricted, cont.generatePDF.bind(cont));

export default router;
