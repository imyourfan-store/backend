import { Application, json, NextFunction, Request, Response, urlencoded } from 'express';
import { routes } from '../api/routes';
import helmet from 'helmet';
import cors from 'cors';
import { ResponseHandler } from '@/utils/ResponseHandler';

export async function expressLoader(app: Application) {
  app.use(helmet());

  const ACCEPTED_ORIGINS = ['http://localhost:3000', 'http://localhost:5173'];
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    })
  );

  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.use('/api', routes());

  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);

    ResponseHandler.error(err, res);

    next();
  });
}
