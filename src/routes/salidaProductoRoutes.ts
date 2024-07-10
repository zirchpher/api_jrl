import { Router } from 'express';
import {
  createSalidaProductoController,
  getSalidasProductoController,
  getSalidaProductoByIdController,
  updateSalidaProductoController,
  deleteSalidaProductoController,
} from '../controllers/salidaProductoController';

const router: Router = Router();

router.post('/', createSalidaProductoController);
router.get('/', getSalidasProductoController);
router.get('/:id', getSalidaProductoByIdController);
router.put('/:id', updateSalidaProductoController);
router.delete('/:id', deleteSalidaProductoController);

export default router;
