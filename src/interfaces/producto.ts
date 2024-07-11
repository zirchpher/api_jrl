export interface Producto {
  id: number;
  id_producto_proveedor: number;
  id_categoria: number;
  imagen: string;
  stock: number;
  stock_minimo: number;
  stock_maximo: number;
  precio_unitario: number;
  precio_venta: number;
  igv: number;
  subtotal: number;
  total: number;
  fecha_ingreso: Date;
  fecha_vencimiento: Date;
  id_almacen: number;
  nombre_producto: string;
  nombre_categoria: string;
  nombre_almacen: string;
  direccion_almacen: string;
  telefono_almacen: string;
}
