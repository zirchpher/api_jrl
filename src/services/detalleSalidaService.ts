import { DetalleSalida } from '../interfaces/detalleSalida';
import pool from '../config/database';

export const createDetalleSalida = async (detalleSalida: DetalleSalida): Promise<void> => {
  const { cantidad, igv, subtotal, total, id_salida_producto, id_producto } = detalleSalida;
  await pool.query(
    'INSERT INTO Detalle_Salida (cantidad, igv, subtotal, total, id_salida_producto, id_producto) VALUES (?, ?, ?, ?, ?, ?)',
    [cantidad, igv, subtotal, total, id_salida_producto, id_producto]
  );
};

export const getDetalleSalidas = async (): Promise<DetalleSalida[]> => {
  const [rows] = await pool.query('SELECT id, cantidad, igv, subtotal, total FROM Detalle_Salida');
  return rows as DetalleSalida[];
};

export const getDetalleSalidaById = async (id: number): Promise<DetalleSalida | null> => {
  const [rows] = await pool.query('SELECT id, cantidad, igv, subtotal, total FROM Detalle_Salida WHERE id = ?', [id]);
  const detalleSalidas = rows as DetalleSalida[];
  return detalleSalidas.length > 0 ? detalleSalidas[0] : null;
};

export const updateDetalleSalida = async (
  id: number,
  detalleSalida: DetalleSalida
): Promise<void> => {
  const { cantidad, igv, subtotal, total, id_salida_producto, id_producto } = detalleSalida;
  await pool.query(
    'UPDATE Detalle_Salida SET cantidad = ?, igv = ?, subtotal = ?, total = ?, id_salida_producto = ?, id_producto = ? WHERE id = ?',
    [cantidad, igv, subtotal, total, id_salida_producto, id_producto, id]
  );
};

export const deleteDetalleSalida = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Detalle_Salida WHERE id = ?', [id]);
};
