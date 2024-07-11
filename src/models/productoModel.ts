import { RowDataPacket, OkPacket } from 'mysql2';
import { Producto } from '../interfaces/producto';
import db from '../config/database';

export const obtenerTodos = async (): Promise<Producto[]> => {
  const query = `
                  SELECT 
                  p.id,
                  pp.nombre_producto,
                  c.nombre_categoria,
                  p.imagen,
                  p.stock,
                  p.stock_minimo,
                  p.stock_maximo,
                  p.precio_unitario,
                  p.precio_venta,
                  p.igv,
                  p.subtotal,
                  p.total,
                  p.fecha_ingreso,
                  p.fecha_vencimiento,
                  a.nombre_almacen,
                  a.direccion_almacen,
                  a.telefono_almacen
              FROM 
                  Productos p
              INNER JOIN 
                  Productos_Proveedor pp ON p.id_producto_proveedor = pp.id
              INNER JOIN 
                  Categorias c ON p.id_categoria = c.id
              INNER JOIN 
                  Almacen a ON p.id_almacen = a.id;
  `;
  const [rows] = await db.execute(query);
  return rows as Producto[];
};

export const obtenerPorId = async (id: number): Promise<Producto | null> => {
  const query = `
    SELECT 
      p.id AS id_producto,
      pp.nombre_producto,
      c.nombre_categoria,
      p.imagen,
      p.stock,
      p.stock_minimo,
      p.stock_maximo,
      p.precio_unitario,
      p.precio_venta,
      p.igv,
      p.subtotal,
      p.total,
      p.fecha_ingreso,
      p.fecha_vencimiento,
      a.nombre_almacen,
      a.direccion_almacen,
      a.telefono_almacen
    FROM 
      Productos p
    INNER JOIN 
      Productos_Proveedor pp ON p.id_producto_proveedor = pp.id
    INNER JOIN 
      Categorias c ON p.id_categoria = c.id
    INNER JOIN 
      Almacen a ON p.id_almacen = a.id
    WHERE 
      p.id = ?
  `;

  const [rows] = await db.execute<RowDataPacket[]>(query, [id]);

  // Verifica si rows no está vacío
  if (rows.length > 0) {
    const row = rows[0];
    const producto: Producto = {
      id: row.id_producto,
      id_producto_proveedor: row.id_producto_proveedor,
      id_categoria: row.id_categoria,
      imagen: row.imagen,
      stock: row.stock,
      stock_minimo: row.stock_minimo,
      stock_maximo: row.stock_maximo,
      precio_unitario: row.precio_unitario,
      precio_venta: row.precio_venta,
      igv: row.igv,
      subtotal: row.subtotal,
      total: row.total,
      fecha_ingreso: row.fecha_ingreso,
      fecha_vencimiento: row.fecha_vencimiento,
      id_almacen: row.id_almacen,
      nombre_producto: row.nombre_producto,
      nombre_categoria: row.nombre_categoria,
      nombre_almacen: row.nombre_almacen,
      direccion_almacen: row.direccion_almacen,
      telefono_almacen: row.telefono_almacen,
    };
    return producto;
  }

  return null;
};

export const obtenerPorIdSinFormato = async (
  id: number
): Promise<Producto | null> => {
  const query = `
    SELECT *
    FROM Productos
    WHERE id = ?
  `;

  const [rows] = await db.execute<RowDataPacket[]>(query, [id]);

  // Verifica si rows no está vacío
  if (rows.length > 0) {
    const row = rows[0];
    const producto: Producto = {
      id: row.id,
      id_producto_proveedor: row.id_producto_proveedor,
      id_categoria: row.id_categoria,
      imagen: row.imagen,
      stock: row.stock,
      stock_minimo: row.stock_minimo,
      stock_maximo: row.stock_maximo,
      precio_unitario: row.precio_unitario,
      precio_venta: row.precio_venta,
      igv: row.igv,
      subtotal: row.subtotal,
      total: row.total,
      fecha_ingreso: row.fecha_ingreso,
      fecha_vencimiento: row.fecha_vencimiento,
      id_almacen: row.id_almacen,
      nombre_producto: row.nombre_producto,
      nombre_categoria: row.nombre_categoria,
      nombre_almacen: row.nombre_almacen,
      direccion_almacen: row.direccion_almacen,
      telefono_almacen: row.telefono_almacen,
    };
    return producto;
  }

  return null;
};

export const crearProducto = async (producto: Producto): Promise<number> => {
  const {
    id_producto_proveedor,
    id_categoria,
    imagen,
    stock,
    stock_minimo,
    stock_maximo,
    precio_unitario,
    precio_venta,
    igv,
    subtotal,
    total,
    fecha_ingreso,
    fecha_vencimiento,
    id_almacen,
  } = producto;

  const query = `
      INSERT INTO Productos 
      (id_producto_proveedor, id_categoria, imagen, stock, stock_minimo, stock_maximo, 
      precio_unitario, precio_venta, igv, subtotal, total, fecha_ingreso, fecha_vencimiento, id_almacen) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.execute<OkPacket>(query, [
    id_producto_proveedor,
    id_categoria,
    imagen,
    stock,
    stock_minimo,
    stock_maximo,
    precio_unitario,
    precio_venta,
    igv,
    subtotal,
    total,
    fecha_ingreso,
    fecha_vencimiento,
    id_almacen,
  ]);

  return result.insertId!;
};

export const actualizarProducto = async (
  id: number,
  producto: Partial<Producto>
): Promise<{ message: string }> => {
  const {
    id_producto_proveedor,
    id_categoria,
    stock,
    stock_minimo,
    stock_maximo,
    precio_unitario,
    precio_venta,
    fecha_ingreso,
    fecha_vencimiento,
    id_almacen,
  } = producto;

  const query = `
        UPDATE Productos 
        SET 
            id_producto_proveedor = ?, 
            id_categoria = ?, 
            stock = ?, 
            stock_minimo = ?, 
            stock_maximo = ?, 
            precio_unitario = ?, 
            precio_venta = ?, 
            fecha_ingreso = ?, 
            fecha_vencimiento = ?, 
            id_almacen = ?
        WHERE id = ?
    `;

  try {
    const [result] = await db.execute(query, [
      id_producto_proveedor,
      id_categoria,
      stock,
      stock_minimo,
      stock_maximo,
      precio_unitario,
      precio_venta,
      fecha_ingreso,
      fecha_vencimiento,
      id_almacen,
      id,
    ]);

    if ((result as any).affectedRows > 0) {
      return { message: 'Producto actualizado exitosamente' };
    } else {
      return { message: 'Producto no encontrado' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'Error al actualizar el producto' };
  }
};

export const eliminarProducto = async (id: number): Promise<void> => {
  const query = 'DELETE FROM Productos WHERE id = ?';
  await db.execute(query, [id]);
};
