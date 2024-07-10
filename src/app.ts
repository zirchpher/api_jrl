import express from 'express';
import authRoutes from './routes/authRoutes';
//import productoRoutes from './routes/productoRoutes';
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
//app.use('/api', productoRoutes);

export default app;
