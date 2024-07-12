// src/routes/entradaProductoRoutes.ts

import { Router } from 'express';
import {
  createEntradaProductoController,
  getEntradaProductosController,
  getEntradaProductoByIdController,
  updateEntradaProductoController,
  deleteEntradaProductoController
} from '../controllers/entradaProductoController';

const router: Router = Router();

router.post('/', createEntradaProductoController);
router.get('/', getEntradaProductosController);
router.get('/:id', getEntradaProductoByIdController);
router.put('/:id', updateEntradaProductoController);
router.delete('/:id', deleteEntradaProductoController);

export default router;
