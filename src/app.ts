import express from 'express';
import authRoutes from './routes/authRoutes';
import salidaProductoRoutes from './routes/salidaProductoRoutes';
import proveedorRoutes from './routes/proveedorRoutes';
import usuariosRouter from './routes/usuariosRoutes';
import productosRoutes from './routes/productosRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/salidaProducto', salidaProductoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRoutes);

export default app;
