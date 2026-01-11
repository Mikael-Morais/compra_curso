import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import paymentRoutes from './routes/payment.routes';
import userRoutes from './routes/users.routes';
import dotenv from 'dotenv';

dotenv.config();

//  app.use('/webhooks/stripe', express.raw({ type: 'application/json' }));

const app: Application = express();

// Segurança 
app.use(helmet());

app.use(cors({
  origin: ['http://localhost:3000'], 
  credentials: true,
}));

// Logs de requisição
app.use(morgan('dev'));

// Limite de requisições (proteção básica)
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rotas
app.use('/payments', paymentRoutes);
app.use('/users', userRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Error handler central
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Erro interno do servidor';
  const details = process.env.NODE_ENV !== 'production' ? err.stack : undefined;

  res.status(status).json({ error: message, details });
});

export default app;
