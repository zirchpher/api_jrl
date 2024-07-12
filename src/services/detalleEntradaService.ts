// src/services/detalleEntradaService.ts

import { DetalleEntrada } from '../interfaces/detalleEntrada';
import {
  createDetalleEntrada,
  getDetallesEntrada,
  getDetalleEntradaById,
  updateDetalleEntrada,
  deleteDetalleEntrada
} from '../models/detalleEntradaModel';

export const addDetalleEntrada = async (detalleEntrada: DetalleEntrada): Promise<void> => {
  await createDetalleEntrada(detalleEntrada);
};

export const fetchDetallesEntrada = async (): Promise<DetalleEntrada[]> => {
  return await getDetallesEntrada();
};

export const fetchDetalleEntradaById = async (id: number): Promise<DetalleEntrada | null> => {
  return await getDetalleEntradaById(id);
};

export const editDetalleEntrada = async (id: number, detalleEntrada: DetalleEntrada): Promise<void> => {
  await updateDetalleEntrada(id, detalleEntrada);
};

export const removeDetalleEntrada = async (id: number): Promise<void> => {
  await deleteDetalleEntrada(id);
};
