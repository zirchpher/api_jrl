// src/services/rolService.ts

import { Rol } from '../interfaces/rol';
import {
  createRol,
  getRoles,
  getRolById,
  updateRol,
  deleteRol
} from '../models/rolModel';

export const addRol = async (rol: Rol): Promise<void> => {
  await createRol(rol);
};

export const fetchRoles = async (): Promise<Rol[]> => {
  return await getRoles();
};

export const fetchRolById = async (id: number): Promise<Rol | null> => {
  return await getRolById(id);
};

export const editRol = async (id: number, rol: Rol): Promise<void> => {
  await updateRol(id, rol);
};

export const removeRol = async (id: number): Promise<void> => {
  await deleteRol(id);
};
