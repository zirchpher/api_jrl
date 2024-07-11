import express from 'express';
import * as productosController from '../controllers/productosController';

const router = express.Router();

router.get('/', productosController.obtenerTodos);
router.get('/:id', productosController.obtenerPorId);
router.get('/sf/:id', productosController.obtenerPorIdSinFormato);
router.post('/', productosController.crearProducto);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

export default router;
