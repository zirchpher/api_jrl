// src/models/categoriaModel.ts
import pool from '../config/database';
import { Categoria } from '../interfaces/categoria';

export const createCategoria = async (categoria: Categoria): Promise<void> => {
  const { nombre_categoria } = categoria;
  await pool.query(
    'INSERT INTO Categorias (nombre_categoria) VALUES (?)',
    [nombre_categoria]
  );
};

export const getCategorias = async (): Promise<Categoria[]> => {
  const [rows] = await pool.query('SELECT * FROM Categorias');
  return rows as Categoria[];
};

export const getCategoriaById = async (id: number): Promise<Categoria | null> => {
  const [rows] = await pool.query('SELECT * FROM Categorias WHERE id = ?', [id]);
  const categorias = rows as Categoria[];
  return categorias.length > 0 ? categorias[0] : null;
};

export const updateCategoria = async (
  id: number,
  categoria: Categoria
): Promise<void> => {
  const { nombre_categoria } = categoria;
  await pool.query(
    'UPDATE Categorias SET nombre_categoria = ? WHERE id = ?',
    [nombre_categoria, id]
  );
};

export const deleteCategoria = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Categorias WHERE id = ?', [id]);
};
