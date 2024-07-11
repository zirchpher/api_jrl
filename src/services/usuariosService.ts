import { Usuario } from '../interfaces/usuario';
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from '../models/usuariosModel';

export const addUsuario = async (usuario: Usuario): Promise<void> => {
  await createUsuario(usuario);
};

export const fetchUsuarios = async (): Promise<Usuario[]> => {
  return await getUsuarios();
};

export const fetchUsuarioById = async (
  id: number
): Promise<Usuario | null> => {
  return await getUsuarioById(id);
};

export const editUsuario = async (
  id: number,
  usuario: Usuario
): Promise<void> => {
  await updateUsuario(id, usuario);
};

export const removeUsuario = async (id: number): Promise<void> => {
  await deleteUsuario(id);
};
