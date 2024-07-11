export interface SalidaProducto {
  id?: number; // El ID puede ser opcional si se usa en un contexto donde se crea el objeto
  nombre_salida: string;
  fecha_salida: Date;
  estado_salida: string;
  metodo_envio: string;
  id_destino?: number; // Campo opcional, debe reflejar la estructura de la tabla Salida_Producto
  id_empleado?: number; // Campo opcional, debe reflejar la estructura de la tabla Salida_Producto
}
