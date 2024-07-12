import express from 'express';
import authRoutes from './routes/authRoutes';
import salidaProductoRoutes from './routes/salidaProductoRoutes';
import proveedorRoutes from './routes/proveedorRoutes';
import usuariosRouter from './routes/usuariosRoutes';
import productosRoutes from './routes/productosRoutes';
import almacenRoutes from './routes/almacenRoutes';
import productosProveedorRoutes from './routes/productosProveedorRoutes';
import categoriasRoutes from './routes/categoriaRoutes';
import destinosRoutes from './routes/destinoRoutes';
import notificacionRoutes from './routes/notificacionRoutes';
import rolRoutes from './routes/rolRoutes';
import entradaProductoRoutes from './routes/entradaProductoRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/salidaProducto', salidaProductoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRoutes);
app.use('/api/productosProveedor', productosProveedorRoutes);
app.use('/api/almacen', almacenRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/destinos', destinosRoutes);
app.use('/api/notificaciones', notificacionRoutes);
app.use('/api/roles', rolRoutes);
app.use('/api/entrada-productos', entradaProductoRoutes);


export default app;
