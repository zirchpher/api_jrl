import { findEmpleadoByCorreo } from '../models/empleadoModel';
import { Empleado } from '../interfaces/empleado';

export const login = async (
  correo: string,
  clave: string
): Promise<Empleado | null> => {
  const empleado = await findEmpleadoByCorreo(correo);
  if (empleado && empleado.clave === clave) {
    return empleado;
  }
  return null;
};
