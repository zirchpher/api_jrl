import pool from '../config/database';
import { DetalleEntrada } from '../interfaces/detalleEntrada';

export const createDetalleEntrada = async (detalleEntrada: DetalleEntrada): Promise<void> => {
  const { cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto } = detalleEntrada;
  await pool.query(
    'INSERT INTO Detalle_Entrada (cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto) VALUES (?, ?, ?, ?, ?, ?)',
    [cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto]
  );
};

export const getDetallesEntrada = async (): Promise<DetalleEntrada[]> => {
  const [rows] = await pool.query(
    'SELECT id, cantidad, precio_unitario, subtotal, total FROM Detalle_Entrada'
  );
  return rows as DetalleEntrada[];
};

export const getDetalleEntradaById = async (id: number): Promise<DetalleEntrada | null> => {
  const [rows] = await pool.query(
    'SELECT id, cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto FROM Detalle_Entrada WHERE id = ?',
    [id]
  );
  const detallesEntrada = rows as DetalleEntrada[];
  return detallesEntrada.length > 0 ? detallesEntrada[0] : null;
};

export const updateDetalleEntrada = async (
  id: number,
  detalleEntrada: DetalleEntrada
): Promise<void> => {
  const { cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto } = detalleEntrada;
  await pool.query(
    'UPDATE Detalle_Entrada SET cantidad = ?, precio_unitario = ?, subtotal = ?, total = ?, id_entrada_producto = ?, id_producto = ? WHERE id = ?',
    [cantidad, precio_unitario, subtotal, total, id_entrada_producto, id_producto, id]
  );
};

export const deleteDetalleEntrada = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Detalle_Entrada WHERE id = ?', [id]);
};
