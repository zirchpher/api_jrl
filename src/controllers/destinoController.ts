// src/controllers/destinoController.ts

import { Request, Response } from 'express';
import {
  createDestino,
  getDestinos,
  getDestinoById,
  updateDestino,
  deleteDestino
} from '../models/destinoModel';
import { Destino } from '../interfaces/destino';

export const createDestinoController = async (req: Request, res: Response) => {
  try {
    const destino: Destino = req.body;
    await createDestino(destino);
    res.status(201).json({ message: 'Destino creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear destino', error: (error as Error).message });
  }
};

export const getDestinosController = async (req: Request, res: Response) => {
  try {
    const destinos = await getDestinos();
    res.status(200).json(destinos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener destinos', error: (error as Error).message });
  }
};

export const getDestinoByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const destino = await getDestinoById(Number(id));
    if (destino) {
      res.status(200).json(destino);
    } else {
      res.status(404).json({ message: 'Destino no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener destino', error: (error as Error).message });
  }
};

export const updateDestinoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const destino: Destino = req.body;
  try {
    await updateDestino(Number(id), destino);
    res.status(200).json({ message: 'Destino actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar destino', error: (error as Error).message });
  }
};

export const deleteDestinoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteDestino(Number(id));
    res.status(200).json({ message: 'Destino eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar destino', error: (error as Error).message });
  }
};
