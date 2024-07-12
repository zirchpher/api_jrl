// src/services/categoriaService.ts
import { Categoria } from '../interfaces/categoria';
import {
  createCategoria as createCategoriaModel,
  getCategorias as getCategoriasModel,
  getCategoriaById as getCategoriaByIdModel,
  updateCategoria as updateCategoriaModel,
  deleteCategoria as deleteCategoriaModel
} from '../models/categoriaModel';

export const createCategoria = async (categoria: Categoria): Promise<void> => {
  try {
    await createCategoriaModel(categoria);
  } catch (err) {
    throw new Error('Error al crear categoría: ' + (err as Error).message);
  }
};

export const getCategorias = async (): Promise<Categoria[]> => {
  try {
    return await getCategoriasModel();
  } catch (err) {
    throw new Error('Error al obtener categorías: ' + (err as Error).message);
  }
};

export const getCategoriaById = async (id: number): Promise<Categoria | null> => {
  try {
    return await getCategoriaByIdModel(id);
  } catch (err) {
    throw new Error('Error al obtener categoría: ' + (err as Error).message);
  }
};

export const updateCategoria = async (
  id: number,
  categoria: Categoria
): Promise<void> => {
  try {
    await updateCategoriaModel(id, categoria);
  } catch (err) {
    throw new Error('Error al actualizar categoría: ' + (err as Error).message);
  }
};

export const deleteCategoria = async (id: number): Promise<void> => {
  try {
    await deleteCategoriaModel(id);
  } catch (err) {
    throw new Error('Error al eliminar categoría: ' + (err as Error).message);
  }
};
