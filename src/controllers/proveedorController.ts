import { Request, Response } from 'express';
import {
  addProveedor,
  fetchProveedores,
  fetchProveedorById,
  editProveedor,
  removeProveedor,
} from '../services/proveedorService';
import { Proveedor } from '../interfaces/proveedor';

export const createProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const proveedor: Proveedor = req.body;
  try {
    await addProveedor(proveedor);
    return res.status(201).json({ message: 'Proveedor creado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al crear proveedor',
        error: (error as Error).message,
      });
  }
};

export const getProveedoresController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const proveedores = await fetchProveedores();
    return res.status(200).json(proveedores);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener proveedores',
        error: (error as Error).message,
      });
  }
};

export const getProveedorByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const proveedor = await fetchProveedorById(Number(id));
    if (proveedor) {
      return res.status(200).json(proveedor);
    } else {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener proveedor',
        error: (error as Error).message,
      });
  }
};

export const updateProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const proveedor: Proveedor = req.body;
  try {
    await editProveedor(Number(id), proveedor);
    return res
      .status(200)
      .json({ message: 'Proveedor actualizado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al actualizar proveedor',
        error: (error as Error).message,
      });
  }
};

export const deleteProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await removeProveedor(Number(id));
    return res
      .status(200)
      .json({ message: 'Proveedor eliminado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al eliminar proveedor',
        error: (error as Error).message,
      });
  }
};
