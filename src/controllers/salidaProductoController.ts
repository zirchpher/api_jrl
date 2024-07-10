import { Request, Response } from 'express';
import {
  addSalidaProducto,
  fetchSalidasProducto,
  fetchSalidaProductoById,
  editSalidaProducto,
  removeSalidaProducto,
} from '../services/salidaProductoService';
import { SalidaProducto } from '../interfaces/salidaProducto';

export const createSalidaProductoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salidaProducto: SalidaProducto = req.body;
  try {
    await addSalidaProducto(salidaProducto);
    return res.status(201).json({ message: 'Salida de producto creada exitosamente' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al crear salida de producto',
      error: (error as Error).message,
    });
  }
};

export const getSalidasProductoController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const salidasProducto = await fetchSalidasProducto();
    return res.status(200).json(salidasProducto);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener salidas de producto',
      error: (error as Error).message,
    });
  }
};

export const getSalidaProductoByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const salidaProducto = await fetchSalidaProductoById(Number(id));
    if (salidaProducto) {
      return res.status(200).json(salidaProducto);
    } else {
      return res.status(404).json({ message: 'Salida de producto no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener salida de producto',
      error: (error as Error).message,
    });
  }
};

export const updateSalidaProductoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const salidaProducto: SalidaProducto = req.body;
  try {
    await editSalidaProducto(Number(id), salidaProducto);
    return res.status(200).json({ message: 'Salida de producto actualizada exitosamente' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar salida de producto',
      error: (error as Error).message,
    });
  }
};

export const deleteSalidaProductoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await removeSalidaProducto(Number(id));
    return res.status(200).json({ message: 'Salida de producto eliminada exitosamente' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar salida de producto',
      error: (error as Error).message,
    });
  }
};
