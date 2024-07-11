import { ProductoProveedor } from '../interfaces/productoProveedor';
import {
  createProductoProveedor as create,
  getProductosProveedor as getAll,
  getProductoProveedorById as getById,
  updateProductoProveedor as update,
  deleteProductoProveedor as remove,
} from '../models/productosProveedorModel';

export const createProductoProveedor = async (productoProveedor: ProductoProveedor): Promise<void> => {
  await create(productoProveedor);
};

export const getProductosProveedor = async (): Promise<ProductoProveedor[]> => {
  return await getAll();
};

export const getProductoProveedorById = async (id: number): Promise<ProductoProveedor | null> => {
  return await getById(id);
};

export const updateProductoProveedor = async (id: number, productoProveedor: ProductoProveedor): Promise<void> => {
  await update(id, productoProveedor);
};

export const deleteProductoProveedor = async (id: number): Promise<void> => {
  await remove(id);
};
