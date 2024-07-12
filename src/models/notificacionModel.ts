// src/models/notificacionModel.ts

import pool from '../config/database';
import { Notificacion } from '../interfaces/notificacion';

export const createNotificacion = async (notificacion: Notificacion): Promise<void> => {
  const { id_empleado, mensaje } = notificacion;
  await pool.query(
    'INSERT INTO Notificaciones (id_empleado, mensaje) VALUES (?, ?)',
    [id_empleado, mensaje]
  );
};

export const getNotificaciones = async (): Promise<Notificacion[]> => {
  const [rows] = await pool.query(
    'SELECT id, mensaje, fecha FROM Notificaciones'
  );
  return rows as Notificacion[];
};

export const getNotificacionById = async (id: number): Promise<Notificacion | null> => {
  const [rows] = await pool.query(
    'SELECT id, id_empleado, mensaje, fecha FROM Notificaciones WHERE id = ?',
    [id]
  );
  const notificaciones = rows as Notificacion[];
  return notificaciones.length > 0 ? notificaciones[0] : null;
};

export const updateNotificacion = async (
  id: number,
  notificacion: Notificacion
): Promise<void> => {
  const { id_empleado, mensaje } = notificacion;
  await pool.query(
    'UPDATE Notificaciones SET id_empleado = ?, mensaje = ? WHERE id = ?',
    [id_empleado, mensaje, id]
  );
};

export const deleteNotificacion = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Notificaciones WHERE id = ?', [id]);
};
