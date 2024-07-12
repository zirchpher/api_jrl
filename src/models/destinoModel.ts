// src/models/destinoModel.ts

import pool from '../config/database';
import { Destino } from '../interfaces/destino';

export const createDestino = async (destino: Destino): Promise<void> => {
  const { nombre_destino, direccion_destino, contacto_destino } = destino;
  await pool.query(
    'INSERT INTO Destinos (nombre_destino, direccion_destino, contacto_destino) VALUES (?, ?, ?)',
    [nombre_destino, direccion_destino, contacto_destino]
  );
};

export const getDestinos = async (): Promise<Destino[]> => {
  const [rows] = await pool.query('SELECT * FROM Destinos');
  return rows as Destino[];
};

export const getDestinoById = async (id: number): Promise<Destino | null> => {
  const [rows] = await pool.query('SELECT * FROM Destinos WHERE id = ?', [id]);
  const destinos = rows as Destino[];
  return destinos.length > 0 ? destinos[0] : null;
};

export const updateDestino = async (
  id: number,
  destino: Destino
): Promise<void> => {
  const { nombre_destino, direccion_destino, contacto_destino } = destino;
  await pool.query(
    'UPDATE Destinos SET nombre_destino = ?, direccion_destino = ?, contacto_destino = ? WHERE id = ?',
    [nombre_destino, direccion_destino, contacto_destino, id]
  );
};

export const deleteDestino = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Destinos WHERE id = ?', [id]);
};
