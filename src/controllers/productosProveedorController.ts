import { Request, Response } from 'express';
import {
  createProductoProveedor,
  getProductosProveedor,
  getProductoProveedorById,
  updateProductoProveedor,
  deleteProductoProveedor,
} from '../services/productosProveedorService';
import { ProductoProveedor } from '../interfaces/productoProveedor';

export const createProductoProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const productoProveedor: ProductoProveedor = req.body;
  try {
    await createProductoProveedor(productoProveedor);
    return res.status(201).json({ message: 'Producto proveedor creado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al crear producto proveedor',
        error: (error as Error).message,
      });
  }
};

export const getProductosProveedorController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const productosProveedor = await getProductosProveedor();
    return res.status(200).json(productosProveedor);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener productos proveedor',
        error: (error as Error).message,
      });
  }
};

export const getProductoProveedorByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const productoProveedor = await getProductoProveedorById(Number(id));
    if (productoProveedor) {
      return res.status(200).json(productoProveedor);
    } else {
      return res.status(404).json({ message: 'Producto proveedor no encontrado' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener producto proveedor',
        error: (error as Error).message,
      });
  }
};

export const updateProductoProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const productoProveedor: ProductoProveedor = req.body;
  try {
    await updateProductoProveedor(Number(id), productoProveedor);
    return res
      .status(200)
      .json({ message: 'Producto proveedor actualizado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al actualizar producto proveedor',
        error: (error as Error).message,
      });
  }
};

export const deleteProductoProveedorController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await deleteProductoProveedor(Number(id));
    return res
      .status(200)
      .json({ message: 'Producto proveedor eliminado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al eliminar producto proveedor',
        error: (error as Error).message,
      });
  }
};
