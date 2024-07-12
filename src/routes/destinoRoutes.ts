// src/routes/destinoRoutes.ts

import { Router } from 'express';
import {
  createDestinoController,
  getDestinosController,
  getDestinoByIdController,
  updateDestinoController,
  deleteDestinoController
} from '../controllers/destinoController';

const router: Router = Router();

router.post('/', createDestinoController);
router.get('/', getDestinosController);
router.get('/:id', getDestinoByIdController);
router.put('/:id', updateDestinoController);
router.delete('/:id', deleteDestinoController);

export default router;
