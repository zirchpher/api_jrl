import { Request, Response } from 'express';
import * as productoModel from '../models/productoModel';
import { Producto } from '../interfaces/producto';

export const obtenerTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productos = await productoModel.obtenerTodos();
    res.json(productos);
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerPorId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const producto = await productoModel.obtenerPorId(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: `Producto con id ${id} no encontrado` });
    }
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerPorIdSinFormato = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const producto = await productoModel.obtenerPorIdSinFormato(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: `Producto con id ${id} no encontrado` });
    }
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};

export const crearProducto = async (
  req: Request,
  res: Response
): Promise<void> => {
  const producto: Producto = req.body;
  try {
    const nuevoId = await productoModel.crearProducto(producto);
    res
      .status(201)
      .json({ id: nuevoId, message: 'Producto creado correctamente' });
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};

export const actualizarProducto = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  const producto: Producto = req.body;
  try {
    await productoModel.actualizarProducto(id, producto);
    res.json({ id, message: 'Producto actualizado correctamente' });
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};

export const eliminarProducto = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await productoModel.eliminarProducto(id);
    res.json({ id, message: 'Producto eliminado correctamente' });
  } catch (error: string | any) {
    res.status(500).json({ message: error.message });
  }
};
