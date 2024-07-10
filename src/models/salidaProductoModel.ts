import pool from '../config/database';
import { SalidaProducto } from '../interfaces/salidaProducto';

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
    [
      nombre_salida,
      fecha_salida,
      id_destino,
      estado_salida,
      id_empleado,
      metodo_envio,
    ]
  );
};

export const getSalidasProducto = async (): Promise<SalidaProducto[]> => {
  const [rows] = await pool.query('SELECT * FROM Salida_Producto');
  return rows as SalidaProducto[];
};

export const getSalidaProductoById = async (
  id: number
): Promise<SalidaProducto | null> => {
  const [rows] = await pool.query('SELECT * FROM Salida_Producto WHERE id = ?', [id]);
  const salidasProducto = rows as SalidaProducto[];
  return salidasProducto.length > 0 ? salidasProducto[0] : null;
};

export const updateSalidaProducto = async (
  id: number,
  salidaProducto: SalidaProducto
): Promise<void> => {
  const {
    nombre_salida,
    fecha_salida,
    id_destino,
    estado_salida,
    id_empleado,
    metodo_envio,
  } = salidaProducto;
  await pool.query(
    'UPDATE Salida_Producto SET nombre_salida = ?, fecha_salida = ?, id_destino = ?, estado_salida = ?, id_empleado = ?, metodo_envio = ? WHERE id = ?',
    [
      nombre_salida,
      fecha_salida,
      id_destino,
      estado_salida,
      id_empleado,
      metodo_envio,
      id,
    ]
  );
};

export const deleteSalidaProducto = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Salida_Producto WHERE id = ?', [id]);
};
