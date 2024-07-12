import { Router } from 'express';
import {
  createDetalleSalidaController,
  getDetalleSalidasController,
  getDetalleSalidaByIdController,
  updateDetalleSalidaController,
  deleteDetalleSalidaController,
} from '../controllers/detalleSalidaController';

const router = Router();

router.post('/', createDetalleSalidaController);
router.get('/', getDetalleSalidasController);
router.get('/:id', getDetalleSalidaByIdController);
router.put('/:id', updateDetalleSalidaController);
router.delete('/:id', deleteDetalleSalidaController);

export default router;
