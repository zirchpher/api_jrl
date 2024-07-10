import pool from '../config/database';
import { Empleado } from '../interfaces/empleado';

export const findEmpleadoByCorreo = async (
  correo: string
): Promise<Empleado | null> => {
  const [rows] = await pool.query('SELECT * FROM Empleados WHERE correo = ?', [
    correo,
  ]);
  const empleados = rows as Empleado[];
  return empleados.length > 0 ? empleados[0] : null;
};
