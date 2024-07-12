// src/routes/categoriaRoutes.ts
import { Router } from 'express';
import {
  createCategoriaController,
  getCategoriasController,
  getCategoriaByIdController,
  updateCategoriaController,
  deleteCategoriaController
} from '../controllers/categoriaController';

const router: Router = Router();

router.post('/', createCategoriaController);
router.get('/', getCategoriasController);
router.get('/:id', getCategoriaByIdController);
router.put('/:id', updateCategoriaController);
router.delete('/:id', deleteCategoriaController);

export default router;
