import pool from '../config/database';
import { Usuario } from '../interfaces/usuario';

export const createUsuario = async (usuario: Usuario): Promise<void> => {
  const {
    username,
    correo,
    clave,
    id_rol,
  } = usuario;
  await pool.query(
    'INSERT INTO Empleados (username, correo, clave, id_rol) VALUES (?, ?, ?, ?)',
    [
      username,
      correo,
      clave,
      id_rol,
    ]
  );
};

export const getUsuarios = async (): Promise<Usuario[]> => {
  const [rows] = await pool.query('SELECT * FROM Empleados');
  return rows as Usuario[];
};

export const getUsuarioById = async (
  id: number
): Promise<Usuario | null> => {
  const [rows] = await pool.query('SELECT * FROM Empleados WHERE id = ?', [
    id,
  ]);
  const usuarios = rows as Usuario[];
  return usuarios.length > 0 ? usuarios[0] : null;
};

export const updateUsuario = async (
  id: number,
  usuario: Usuario
): Promise<void> => {
  const {
    username,
    correo,
    clave,
    id_rol,
  } = usuario;
  await pool.query(
    'UPDATE Empleados SET username = ?, correo = ?, clave = ?, id_rol = ? WHERE id = ?',
    [
      username,
      correo,
      clave,
      id_rol,
      id,
    ]
  );
};

export const deleteUsuario = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Empleados WHERE id = ?', [id]);
};
