import pool from '../config/database';
import { Proveedor } from '../interfaces/proveedor';

export const createProveedor = async (proveedor: Proveedor): Promise<void> => {
  const {
    nombre_proveedor,
    contacto_proveedor,
    direccion_proveedor,
    condiciones_pago,
    calificacion_proveedor,
  } = proveedor;
  await pool.query(
    'INSERT INTO Proveedores (nombre_proveedor, contacto_proveedor, direccion_proveedor, condiciones_pago, calificacion_proveedor) VALUES (?, ?, ?, ?, ?)',
    [
      nombre_proveedor,
      contacto_proveedor,
      direccion_proveedor,
      condiciones_pago,
      calificacion_proveedor,
    ]
  );
};

export const getProveedores = async (): Promise<Proveedor[]> => {
  const [rows] = await pool.query('SELECT * FROM Proveedores');
  return rows as Proveedor[];
};

export const getProveedorById = async (
  id: number
): Promise<Proveedor | null> => {
  const [rows] = await pool.query('SELECT * FROM Proveedores WHERE id = ?', [
    id,
  ]);
  const proveedores = rows as Proveedor[];
  return proveedores.length > 0 ? proveedores[0] : null;
};

export const updateProveedor = async (
  id: number,
  proveedor: Proveedor
): Promise<void> => {
  const {
    nombre_proveedor,
    contacto_proveedor,
    direccion_proveedor,
    condiciones_pago,
    calificacion_proveedor,
  } = proveedor;
  await pool.query(
    'UPDATE Proveedores SET nombre_proveedor = ?, contacto_proveedor = ?, direccion_proveedor = ?, condiciones_pago = ?, calificacion_proveedor = ? WHERE id = ?',
    [
      nombre_proveedor,
      contacto_proveedor,
      direccion_proveedor,
      condiciones_pago,
      calificacion_proveedor,
      id,
    ]
  );
};

export const deleteProveedor = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Proveedores WHERE id = ?', [id]);
};
