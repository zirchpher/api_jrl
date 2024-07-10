import { SalidaProducto } from '../interfaces/salidaProducto';
import {
  createSalidaProducto,
  getSalidasProducto,
  getSalidaProductoById,
  updateSalidaProducto,
  deleteSalidaProducto,
} from '../models/salidaProductoModel';

export const addSalidaProducto = async (salidaProducto: SalidaProducto): Promise<void> => {
  await createSalidaProducto(salidaProducto);
};

export const fetchSalidasProducto = async (): Promise<SalidaProducto[]> => {
  return await getSalidasProducto();
};

export const fetchSalidaProductoById = async (
  id: number
): Promise<SalidaProducto | null> => {
  return await getSalidaProductoById(id);
};

export const editSalidaProducto = async (
  id: number,
  salidaProducto: SalidaProducto
): Promise<void> => {
  await updateSalidaProducto(id, salidaProducto);
};

export const removeSalidaProducto = async (id: number): Promise<void> => {
  await deleteSalidaProducto(id);
};
