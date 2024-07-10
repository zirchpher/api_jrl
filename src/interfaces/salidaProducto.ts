export interface SalidaProducto {
    id?: number; // El campo id es opcional porque será autogenerado
    nombre_salida: string;
    fecha_salida?: Date;
    id_destino?: number;
    estado_salida?: string;
    id_empleado?: number;
    metodo_envio?: string;
  }
  