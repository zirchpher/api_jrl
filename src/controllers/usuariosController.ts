import { Request, Response } from 'express';
import { Usuario } from '../interfaces/usuario';
import {
  addUsuario,
  fetchUsuarios,
  fetchUsuarioById,
  editUsuario,
  removeUsuario,
} from '../services/usuariosService';

export const createUsuarioController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usuario: Usuario = req.body;
  try {
    await addUsuario(usuario);
    return res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al crear usuario',
        error: (error as Error).message,
      });
  }
};

export const getUsuariosController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usuarios = await fetchUsuarios();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener usuarios',
        error: (error as Error).message,
      });
  }
};

export const getUsuarioByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const usuario = await fetchUsuarioById(Number(id));
    if (usuario) {
      return res.status(200).json(usuario);
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al obtener usuario',
        error: (error as Error).message,
      });
  }
};

export const updateUsuarioController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const usuario: Usuario = req.body;
  try {
    await editUsuario(Number(id), usuario);
    return res
      .status(200)
      .json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al actualizar usuario',
        error: (error as Error).message,
      });
  }
};

export const deleteUsuarioController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    await removeUsuario(Number(id));
    return res
      .status(200)
      .json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: 'Error al eliminar usuario',
        error: (error as Error).message,
      });
  }
};
