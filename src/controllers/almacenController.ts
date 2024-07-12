import { Request, Response } from 'express';
import {
    createAlmacen,
    getAlmacenes,
    getAlmacenById,
    updateAlmacen,
    deleteAlmacen,
} from '../services/almacenService';
import { Almacen } from '../interfaces/almacen';

export const createAlmacenController = async (req: Request, res: Response): Promise<Response> => {
    const almacen: Almacen = req.body;
    try {
        await createAlmacen(almacen);
        return res.status(201).json({ message: 'Almacén creado exitosamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear almacén',
            error: (error as Error).message,
        });
    }
};

export const getAlmacenesController = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const almacenes = await getAlmacenes();
        return res.status(200).json(almacenes);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener almacenes',
            error: (error as Error).message,
        });
    }
};

export const getAlmacenByIdController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const almacen = await getAlmacenById(Number(id));
        if (almacen) {
            return res.status(200).json(almacen);
        } else {
            return res.status(404).json({ message: 'Almacén no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener almacén',
            error: (error as Error).message,
        });
    }
};

export const updateAlmacenController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const almacen: Almacen = req.body;
    try {
        await updateAlmacen(Number(id), almacen);
        return res.status(200).json({ message: 'Almacén actualizado exitosamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar almacén',
            error: (error as Error).message,
        });
    }
};

export const deleteAlmacenController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        await deleteAlmacen(Number(id));
        return res.status(200).json({ message: 'Almacén eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar almacén',
            error: (error as Error).message,
        });
    }
};
