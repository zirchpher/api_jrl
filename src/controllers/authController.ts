import { Request, Response } from 'express';
import { login } from '../services/authService';

export const loginController = async (req: Request, res: Response) => {
  const { correo, clave } = req.body;
  if (!correo || !clave) {
    return res.status(400).json({ message: 'Correo y clave son requeridos' });
  }

  try {
    const empleado = await login(correo, clave);
    if (empleado) {
      return res.status(200).json({ message: 'Login exitoso' });
    } else {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
