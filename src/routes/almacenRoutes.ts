import { Router } from 'express';
import {
    createAlmacenController,
    getAlmacenesController,
    getAlmacenByIdController,
    updateAlmacenController,
    deleteAlmacenController,
} from '../controllers/almacenController';

const router: Router = Router();

router.post('/', createAlmacenController);
router.get('/', getAlmacenesController);
router.get('/:id', getAlmacenByIdController);
router.put('/:id', updateAlmacenController);
router.delete('/:id', deleteAlmacenController);

export default router;
