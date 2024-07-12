export interface Almacen {
    id?: number; // El identificador puede ser opcional en algunas operaciones, como en las inserciones
    nombre_almacen: string;
    direccion_almacen: string;
    telefono_almacen?: string | null; // Puede ser opcional y puede ser null
}
