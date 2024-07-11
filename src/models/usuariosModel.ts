import pool from '../config/database';
import { Usuario } from '../interfaces/usuario';

export const createUsuario = async (usuario: Usuario): Promise<void> => {
  const { username, correo, clave, id_rol } = usuario;
  await pool.query(
    'INSERT INTO Empleados (username, correo, clave, id_rol) VALUES (?, ?, ?, ?)',
    [username, correo, clave, id_rol]
  );
};

export const getUsuarios = async (): Promise<Usuario[]> => {
  const [rows] = await pool.query(
    'SELECT e.id, e.username, e.correo, e.clave, r.nombre_rol FROM Empleados as e JOIN roles as r ON e.id_rol = r.id;'
  );
  return rows as Usuario[];
};

export const getUsuarioById = async (id: number): Promise<Usuario | null> => {
  const [rows] = await pool.query(
    'SELECT e.id, e.username, e.correo, e.clave, r.nombre_rol FROM Empleados as e JOIN roles as r ON e.id_rol = r.id WHERE e.id = ?',
    [id]
  );
  const usuarios = rows as Usuario[];
  return usuarios.length > 0 ? usuarios[0] : null;
};

export const updateUsuario = async (
  id: number,
  usuario: Usuario
): Promise<void> => {
  const { username, correo, clave } = usuario;
  await pool.query(
    'UPDATE Empleados SET username = ?, correo = ?, clave = ? WHERE id = ?',
    [username, correo, clave, id]
  );
};

export const deleteUsuario = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Empleados WHERE id = ?', [id]);
};
