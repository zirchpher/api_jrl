import { ProductoProveedor } from '../interfaces/productoProveedor';
import pool from '../config/database';
import { Producto } from '@interfaces/producto';

export const createProductoProveedor = async (productoProveedor: ProductoProveedor): Promise<void> => {
  const {
    id_proveedor,
    nombre_producto,
    categoria,
    precio_unitario,
  } = productoProveedor;
  await pool.query(
    'INSERT INTO Productos_Proveedor (id_proveedor, nombre_producto, categoria, precio_unitario) VALUES (?, ?, ?, ?)',
    [id_proveedor, nombre_producto, categoria, precio_unitario]
  );
};

export const getProductosProveedor = async (): Promise<ProductoProveedor[]> => {
  const [rows] = await pool.query('SELECT id, nombre_producto, categoria, precio_unitario FROM Productos_Proveedor');
  return rows as ProductoProveedor[];
};

export const getProductoProveedorById = async (id: number): Promise<ProductoProveedor | null> => {
  const [rows] = await pool.query('SELECT id, nombre_producto, categoria, precio_unitario FROM Productos_Proveedor WHERE id = ?', [id]);
  const productosProveedor = rows as ProductoProveedor[];
  return productosProveedor.length > 0 ? productosProveedor[0] : null;
};

export const updateProductoProveedor = async (
  id: number,
  productoProveedor: ProductoProveedor
): Promise<void> => {
  const {
    nombre_producto,
    categoria,
    precio_unitario,
  } = productoProveedor;
  await pool.query(
    'UPDATE Productos_Proveedor SET nombre_producto = ?, categoria = ?, precio_unitario = ? WHERE id = ?',
    [nombre_producto, categoria, precio_unitario, id]
  );
};

export const deleteProductoProveedor = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Productos_Proveedor WHERE id = ?', [id]);
};

export function obtenerTodos() {
  throw new Error('Function not implemented.');
}

export function obtenerPorId(id: number) {
  throw new Error('Function not implemented.');
}

export function obtenerPorIdSinFormato(id: number) {
  throw new Error('Function not implemented.');
}

export function crearProducto(producto: Producto) {
  throw new Error('Function not implemented.');
}

export function actualizarProducto(id: number, producto: Producto) {
  throw new Error('Function not implemented.');
}

export function eliminarProducto(id: number) {
  throw new Error('Function not implemented.');
}
