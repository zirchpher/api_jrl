import { SalidaProducto } from '../interfaces/salidaProducto';
import pool from '../config/database';

export const createSalidaProducto = async (salidaProducto: SalidaProducto): Promise<void> => {
  const {
    nombre_salida,
    fecha_salida,
    id_destino,
    estado_salida,
    id_empleado,
    metodo_envio,
  } = salidaProducto;
  await pool.query(
    'INSERT INTO Salida_Producto (nombre_salida, fecha_salida, id_destino, estado_salida, id_empleado, metodo_envio) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre_salida, fecha_salida, id_destino, estado_salida, id_empleado, metodo_envio]
  );
};

export const getSalidaProductos = async (): Promise<SalidaProducto[]> => {
  const [rows] = await pool.query('SELECT id, nombre_salida, fecha_salida, estado_salida, metodo_envio FROM Salida_Producto');
  return rows as SalidaProducto[];
};

export const getSalidaProductoById = async (id: number): Promise<SalidaProducto | null> => {
  const [rows] = await pool.query('SELECT id, nombre_salida, fecha_salida, estado_salida, metodo_envio FROM Salida_Producto WHERE id = ?', [id]);
  const salidaProductos = rows as SalidaProducto[];
  return salidaProductos.length > 0 ? salidaProductos[0] : null;
};

export const updateSalidaProducto = async (
  id: number,
  salidaProducto: SalidaProducto
): Promise<void> => {
  const {
    nombre_salida,
    fecha_salida,
    estado_salida,
    metodo_envio,
  } = salidaProducto;
  await pool.query(
    'UPDATE Salida_Producto SET nombre_salida = ?, fecha_salida = ?, estado_salida = ?, metodo_envio = ? WHERE id = ?',
    [nombre_salida, fecha_salida, estado_salida, metodo_envio, id]
  );
};

export const deleteSalidaProducto = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Salida_Producto WHERE id = ?', [id]);
};
