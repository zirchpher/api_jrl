import { Request, Response } from 'express';
import {
  createDetalleSalida,
  getDetalleSalidas,
  getDetalleSalidaById,
  updateDetalleSalida,
  deleteDetalleSalida,
} from '../services/detalleSalidaService';

export const createDetalleSalidaController = async (req: Request, res: Response): Promise<void> => {
  try {
    await createDetalleSalida(req.body);
    res.status(201).json({ message: 'Detalle de salida creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear detalle de salida', error });
  }
};

export const getDetalleSalidasController = async (req: Request, res: Response): Promise<void> => {
  try {
    const detalleSalidas = await getDetalleSalidas();
    res.status(200).json(detalleSalidas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles de salida', error });
  }
};

export const getDetalleSalidaByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const detalleSalida = await getDetalleSalidaById(Number(req.params.id));
    if (detalleSalida) {
      res.status(200).json(detalleSalida);
    } else {
      res.status(404).json({ message: 'Detalle de salida no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalle de salida', error });
  }
};

export const updateDetalleSalidaController = async (req: Request, res: Response): Promise<void> => {
  try {
    await updateDetalleSalida(Number(req.params.id), req.body);
    res.status(200).json({ message: 'Detalle de salida actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar detalle de salida', error });
  }
};

export const deleteDetalleSalidaController = async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteDetalleSalida(Number(req.params.id));
    res.status(200).json({ message: 'Detalle de salida eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar detalle de salida', error });
  }
};
