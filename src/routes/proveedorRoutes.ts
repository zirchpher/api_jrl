import { Router } from 'express';
import {
  createProveedorController,
  getProveedoresController,
  getProveedorByIdController,
  updateProveedorController,
  deleteProveedorController,
} from '../controllers/proveedorController';

const router: Router = Router();

router.post('/', createProveedorController);
router.get('/', getProveedoresController);
router.get('/:id', getProveedorByIdController);
router.put('/:id', updateProveedorController);
router.delete('/:id', deleteProveedorController);

export default router;
