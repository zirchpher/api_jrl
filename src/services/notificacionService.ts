// src/services/notificacionService.ts

import { Notificacion } from '../interfaces/notificacion';
import {
  createNotificacion,
  getNotificaciones,
  getNotificacionById,
  updateNotificacion,
  deleteNotificacion
} from '../models/notificacionModel';

export const addNotificacion = async (notificacion: Notificacion): Promise<void> => {
  await createNotificacion(notificacion);
};

export const fetchNotificaciones = async (): Promise<Notificacion[]> => {
  return await getNotificaciones();
};

export const fetchNotificacionById = async (id: number): Promise<Notificacion | null> => {
  return await getNotificacionById(id);
};

export const editNotificacion = async (id: number, notificacion: Notificacion): Promise<void> => {
  await updateNotificacion(id, notificacion);
};

export const removeNotificacion = async (id: number): Promise<void> => {
  await deleteNotificacion(id);
};
