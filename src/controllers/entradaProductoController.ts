// src/controllers/entradaProductoController.ts

import { Request, Response } from 'express';
import {
  addEntradaProducto,
  fetchEntradaProductos,
  fetchEntradaProductoById,
  editEntradaProducto,
  removeEntradaProducto
} from '../services/entradaProductoService';
import { EntradaProducto } from '../interfaces/entradaProducto';

export const createEntradaProductoController = async (req: Request, res: Response) => {
  try {
    const entradaProducto: EntradaProducto = req.body;
    await addEntradaProducto(entradaProducto);
    res.status(201).json({ message: 'Entrada de producto creada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear entrada de producto', error: (error as Error).message });
  }
};

export const getEntradaProductosController = async (req: Request, res: Response) => {
  try {
    const entradaProductos = await fetchEntradaProductos();
    res.status(200).json(entradaProductos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener entradas de productos', error: (error as Error).message });
  }
};

export const getEntradaProductoByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const entradaProducto = await fetchEntradaProductoById(Number(id));
    if (entradaProducto) {
      res.status(200).json(entradaProducto);
    } else {
      res.status(404).json({ message: 'Entrada de producto no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener entrada de producto', error: (error as Error).message });
  }
};

export const updateEntradaProductoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const entradaProducto: EntradaProducto = req.body;
  try {
    await editEntradaProducto(Number(id), entradaProducto);
    res.status(200).json({ message: 'Entrada de producto actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar entrada de producto', error: (error as Error).message });
  }
};

export const deleteEntradaProductoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeEntradaProducto(Number(id));
    res.status(200).json({ message: 'Entrada de producto eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar entrada de producto', error: (error as Error).message });
  }
};
