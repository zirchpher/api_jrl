import { Proveedor } from '../interfaces/proveedor';
import {
  createProveedor,
  getProveedores,
  getProveedorById,
  updateProveedor,
  deleteProveedor,
} from '../models/proveedorModel';

export const addProveedor = async (proveedor: Proveedor): Promise<void> => {
  await createProveedor(proveedor);
};

export const fetchProveedores = async (): Promise<Proveedor[]> => {
  return await getProveedores();
};

export const fetchProveedorById = async (
  id: number
): Promise<Proveedor | null> => {
  return await getProveedorById(id);
};

export const editProveedor = async (
  id: number,
  proveedor: Proveedor
): Promise<void> => {
  await updateProveedor(id, proveedor);
};

export const removeProveedor = async (id: number): Promise<void> => {
  await deleteProveedor(id);
};
