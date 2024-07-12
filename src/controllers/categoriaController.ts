// src/controllers/categoriaController.ts
import { Request, Response } from 'express';
import {
  createCategoria as createCategoriaService,
  getCategorias as getCategoriasService,
  getCategoriaById as getCategoriaByIdService,
  updateCategoria as updateCategoriaService,
  deleteCategoria as deleteCategoriaService
} from '../services/categoriaService';
import { Categoria } from '../interfaces/categoria';

export const createCategoriaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoria: Categoria = req.body;
    await createCategoriaService(categoria);
    res.status(201).json({ message: 'Categoría creada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear categoría', error: (err as Error).message });
  }
};

export const getCategoriasController = async (req: Request, res: Response): Promise<void> => {
  try {
    const categorias = await getCategoriasService();
    res.status(200).json(categorias);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener categorías', error: (err as Error).message });
  }
};

export const getCategoriaByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const categoria = await getCategoriaByIdService(id);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener categoría', error: (err as Error).message });
  }
};

export const updateCategoriaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const categoria: Categoria = req.body;
    await updateCategoriaService(id, categoria);
    res.status(200).json({ message: 'Categoría actualizada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar categoría', error: (err as Error).message });
  }
};

export const deleteCategoriaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    await deleteCategoriaService(id);
    res.status(200).json({ message: 'Categoría eliminada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar categoría', error: (err as Error).message });
  }
};
