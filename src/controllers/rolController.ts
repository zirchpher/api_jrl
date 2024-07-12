// src/controllers/rolController.ts

import { Request, Response } from 'express';
import {
  addRol,
  fetchRoles,
  fetchRolById,
  editRol,
  removeRol
} from '../services/rolService';
import { Rol } from '../interfaces/rol';

export const createRolController = async (req: Request, res: Response) => {
  try {
    const rol: Rol = req.body;
    await addRol(rol);
    res.status(201).json({ message: 'Rol creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear rol', error: (error as Error).message });
  }
};

export const getRolesController = async (req: Request, res: Response) => {
  try {
    const roles = await fetchRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener roles', error: (error as Error).message });
  }
};

export const getRolByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const rol = await fetchRolById(Number(id));
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener rol', error: (error as Error).message });
  }
};

export const updateRolController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rol: Rol = req.body;
  try {
    await editRol(Number(id), rol);
    res.status(200).json({ message: 'Rol actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar rol', error: (error as Error).message });
  }
};

export const deleteRolController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeRol(Number(id));
    res.status(200).json({ message: 'Rol eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar rol', error: (error as Error).message });
  }
};
