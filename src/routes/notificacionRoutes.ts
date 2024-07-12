// src/routes/notificacionRoutes.ts

import { Router } from 'express';
import {
  createNotificacionController,
  getNotificacionesController,
  getNotificacionByIdController,
  updateNotificacionController,
  deleteNotificacionController
} from '../controllers/notificacionController';

const router: Router = Router();

router.post('/', createNotificacionController);
router.get('/', getNotificacionesController);
router.get('/:id', getNotificacionByIdController);
router.put('/:id', updateNotificacionController);
router.delete('/:id', deleteNotificacionController);

export default router;
