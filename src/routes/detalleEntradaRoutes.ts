// src/routes/detalleEntradaRoutes.ts

import { Router } from 'express';
import {
  createDetalleEntradaController,
  getDetallesEntradaController,
  getDetalleEntradaByIdController,
  updateDetalleEntradaController,
  deleteDetalleEntradaController
} from '../controllers/detalleEntradaController';

const router: Router = Router();

router.post('/', createDetalleEntradaController);
router.get('/', getDetallesEntradaController);
router.get('/:id', getDetalleEntradaByIdController);
router.put('/:id', updateDetalleEntradaController);
router.delete('/:id', deleteDetalleEntradaController);

export default router;
