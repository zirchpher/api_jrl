import { Router } from 'express';
import {
  createUsuarioController,
  getUsuariosController,
  getUsuarioByIdController,
  updateUsuarioController,
  deleteUsuarioController,
} from '../controllers/usuariosController';

const router: Router = Router();

router.post('/', createUsuarioController);
router.get('/', getUsuariosController);
router.get('/:id', getUsuarioByIdController);
router.put('/:id', updateUsuarioController);
router.delete('/:id', deleteUsuarioController);

export default router;
