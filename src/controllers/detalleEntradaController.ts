// src/controllers/detalleEntradaController.ts

import { Request, Response } from 'express';
import {
  addDetalleEntrada,
  fetchDetallesEntrada,
  fetchDetalleEntradaById,
  editDetalleEntrada,
  removeDetalleEntrada
} from '../services/detalleEntradaService';
import { DetalleEntrada } from '../interfaces/detalleEntrada';

export const createDetalleEntradaController = async (req: Request, res: Response) => {
  try {
    const detalleEntrada: DetalleEntrada = req.body;
    await addDetalleEntrada(detalleEntrada);
    res.status(201).json({ message: 'Detalle de entrada creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear detalle de entrada', error: (error as Error).message });
  }
};

export const getDetallesEntradaController = async (req: Request, res: Response) => {
  try {
    const detallesEntrada = await fetchDetallesEntrada();
    res.status(200).json(detallesEntrada);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles de entrada', error: (error as Error).message });
  }
};

export const getDetalleEntradaByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const detalleEntrada = await fetchDetalleEntradaById(Number(id));
    if (detalleEntrada) {
      res.status(200).json(detalleEntrada);
    } else {
      res.status(404).json({ message: 'Detalle de entrada no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalle de entrada', error: (error as Error).message });
  }
};

export const updateDetalleEntradaController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const detalleEntrada: DetalleEntrada = req.body;
  try {
    await editDetalleEntrada(Number(id), detalleEntrada);
    res.status(200).json({ message: 'Detalle de entrada actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar detalle de entrada', error: (error as Error).message });
  }
};

export const deleteDetalleEntradaController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeDetalleEntrada(Number(id));
    res.status(200).json({ message: 'Detalle de entrada eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar detalle de entrada', error: (error as Error).message });
  }
};
