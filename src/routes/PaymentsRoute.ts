import Router from 'express';
import { PaymentsController } from '../controllers/PaymentsController';
import { authenticateToken, requireAdminOrCaissier } from '../middleware/auth';

const cont = new PaymentsController();
const router = Router();

// Routes pour CAISSIER (enregistrement paiements)
router.post('/', authenticateToken, requireAdminOrCaissier, cont.create.bind(cont));
router.put('/:id', authenticateToken, requireAdminOrCaissier, cont.update.bind(cont));
router.delete('/:id', authenticateToken, requireAdminOrCaissier, cont.remove.bind(cont));

// Routes pour lecture (ADMIN, CAISSIER)
router.get('/', authenticateToken, requireAdminOrCaissier, cont.getAll.bind(cont));
router.get('/:id', authenticateToken, requireAdminOrCaissier, cont.getById.bind(cont));
router.get('/:id/pdf', authenticateToken, requireAdminOrCaissier, cont.generatePDF.bind(cont));

export default router;
