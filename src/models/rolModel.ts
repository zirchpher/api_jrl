// src/models/rolModel.ts

import pool from '../config/database';
import { Rol } from '../interfaces/rol';

export const createRol = async (rol: Rol): Promise<void> => {
  const { nombre_rol } = rol;
  await pool.query(
    'INSERT INTO Roles (nombre_rol) VALUES (?)',
    [nombre_rol]
  );
};

export const getRoles = async (): Promise<Rol[]> => {
  const [rows] = await pool.query(
    'SELECT id, nombre_rol FROM Roles'
  );
  return rows as Rol[];
};

export const getRolById = async (id: number): Promise<Rol | null> => {
  const [rows] = await pool.query(
    'SELECT id, nombre_rol FROM Roles WHERE id = ?',
    [id]
  );
  const roles = rows as Rol[];
  return roles.length > 0 ? roles[0] : null;
};

export const updateRol = async (
  id: number,
  rol: Rol
): Promise<void> => {
  const { nombre_rol } = rol;
  await pool.query(
    'UPDATE Roles SET nombre_rol = ? WHERE id = ?',
    [nombre_rol, id]
  );
};

export const deleteRol = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Roles WHERE id = ?', [id]);
};
