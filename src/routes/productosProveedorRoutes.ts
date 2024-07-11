import { Router } from 'express';
import {
  createProductoProveedorController,
  getProductosProveedorController,
  getProductoProveedorByIdController,
  updateProductoProveedorController,
  deleteProductoProveedorController,
} from '../controllers/productosProveedorController';

const router: Router = Router();

router.post('/', createProductoProveedorController);
router.get('/', getProductosProveedorController);
router.get('/:id', getProductoProveedorByIdController);
router.put('/:id', updateProductoProveedorController);
router.delete('/:id', deleteProductoProveedorController);

export default router;
