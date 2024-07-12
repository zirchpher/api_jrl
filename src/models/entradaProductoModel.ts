import pool from '../config/database';
import { EntradaProducto } from '../interfaces/entradaProducto';

export const createEntradaProducto = async (entradaProducto: EntradaProducto): Promise<void> => {
  const { fecha_entrada, id_proveedor, id_empleado } = entradaProducto;
  await pool.query(
    'INSERT INTO Entrada_Productos (fecha_entrada, id_proveedor, id_empleado) VALUES (?, ?, ?)',
    [fecha_entrada, id_proveedor, id_empleado]
  );
};

export const getEntradaProductos = async (): Promise<EntradaProducto[]> => {
  const [rows] = await pool.query(
    'SELECT id, fecha_entrada FROM Entrada_Productos'
  );
  return rows as EntradaProducto[];
};

export const getEntradaProductoById = async (id: number): Promise<EntradaProducto | null> => {
  const [rows] = await pool.query(
    'SELECT id, fecha_entrada, id_proveedor, id_empleado FROM Entrada_Productos WHERE id = ?',
    [id]
  );
  const entradaProductos = rows as EntradaProducto[];
  return entradaProductos.length > 0 ? entradaProductos[0] : null;
};

export const updateEntradaProducto = async (
  id: number,
  entradaProducto: EntradaProducto
): Promise<void> => {
  const { fecha_entrada, id_proveedor, id_empleado } = entradaProducto;
  await pool.query(
    'UPDATE Entrada_Productos SET fecha_entrada = ?, id_proveedor = ?, id_empleado = ? WHERE id = ?',
    [fecha_entrada, id_proveedor, id_empleado, id]
  );
};

export const deleteEntradaProducto = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Entrada_Productos WHERE id = ?', [id]);
};
