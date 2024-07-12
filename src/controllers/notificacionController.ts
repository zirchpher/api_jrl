// src/controllers/notificacionController.ts

import { Request, Response } from 'express';
import {
  addNotificacion,
  fetchNotificaciones,
  fetchNotificacionById,
  editNotificacion,
  removeNotificacion
} from '../services/notificacionService';
import { Notificacion } from '../interfaces/notificacion';

export const createNotificacionController = async (req: Request, res: Response) => {
  try {
    const notificacion: Notificacion = req.body;
    await addNotificacion(notificacion);
    res.status(201).json({ message: 'Notificación creada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear notificación', error: (error as Error).message });
  }
};

export const getNotificacionesController = async (req: Request, res: Response) => {
  try {
    const notificaciones = await fetchNotificaciones();
    res.status(200).json(notificaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener notificaciones', error: (error as Error).message });
  }
};

export const getNotificacionByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const notificacion = await fetchNotificacionById(Number(id));
    if (notificacion) {
      res.status(200).json(notificacion);
    } else {
      res.status(404).json({ message: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener notificación', error: (error as Error).message });
  }
};

export const updateNotificacionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const notificacion: Notificacion = req.body;
  try {
    await editNotificacion(Number(id), notificacion);
    res.status(200).json({ message: 'Notificación actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar notificación', error: (error as Error).message });
  }
};

export const deleteNotificacionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeNotificacion(Number(id));
    res.status(200).json({ message: 'Notificación eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar notificación', error: (error as Error).message });
  }
};
