import { Almacen } from '../interfaces/almacen';
import pool from '../config/database';

export const createAlmacen = async (almacen: Almacen): Promise<void> => {
    const { nombre_almacen, direccion_almacen, telefono_almacen } = almacen;
    await pool.query(
        'INSERT INTO Almacen (nombre_almacen, direccion_almacen, telefono_almacen) VALUES (?, ?, ?)',
        [nombre_almacen, direccion_almacen, telefono_almacen]
    );
};

export const getAlmacenes = async (): Promise<Almacen[]> => {
    const [rows] = await pool.query('SELECT * FROM Almacen');
    return rows as Almacen[];
};

export const getAlmacenById = async (id: number): Promise<Almacen | null> => {
    const [rows] = await pool.query('SELECT * FROM Almacen WHERE id = ?', [id]);
    const almacenes = rows as Almacen[];
    return almacenes.length > 0 ? almacenes[0] : null;
};

export const updateAlmacen = async (id: number, almacen: Almacen): Promise<void> => {
    const { nombre_almacen, direccion_almacen, telefono_almacen } = almacen;
    await pool.query(
        'UPDATE Almacen SET nombre_almacen = ?, direccion_almacen = ?, telefono_almacen = ? WHERE id = ?',
        [nombre_almacen, direccion_almacen, telefono_almacen, id]
    );
};

export const deleteAlmacen = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM Almacen WHERE id = ?', [id]);
};
