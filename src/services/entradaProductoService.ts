import { EntradaProducto } from '../interfaces/entradaProducto';
import {
  createEntradaProducto,
  getEntradaProductos,
  getEntradaProductoById,
  updateEntradaProducto,
  deleteEntradaProducto
} from '../models/entradaProductoModel';

export const addEntradaProducto = async (entradaProducto: EntradaProducto): Promise<void> => {
  await createEntradaProducto(entradaProducto);
};

export const fetchEntradaProductos = async (): Promise<EntradaProducto[]> => {
  return await getEntradaProductos();
};

export const fetchEntradaProductoById = async (id: number): Promise<EntradaProducto | null> => {
  return await getEntradaProductoById(id);
};

export const editEntradaProducto = async (id: number, entradaProducto: EntradaProducto): Promise<void> => {
  await updateEntradaProducto(id, entradaProducto);
};

export const removeEntradaProducto = async (id: number): Promise<void> => {
  await deleteEntradaProducto(id);
};
