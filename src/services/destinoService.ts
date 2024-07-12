// src/services/destinoService.ts

import { Destino } from '../interfaces/destino';
import {
  createDestino,
  getDestinos,
  getDestinoById,
  updateDestino,
  deleteDestino
} from '../models/destinoModel';

export const addDestino = async (destino: Destino): Promise<void> => {
  await createDestino(destino);
};

export const fetchDestinos = async (): Promise<Destino[]> => {
  return await getDestinos();
};

export const fetchDestinoById = async (id: number): Promise<Destino | null> => {
  return await getDestinoById(id);
};

export const editDestino = async (id: number, destino: Destino): Promise<void> => {
  await updateDestino(id, destino);
};

export const removeDestino = async (id: number): Promise<void> => {
  await deleteDestino(id);
};
