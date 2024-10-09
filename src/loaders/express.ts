import { Application, json, urlencoded } from 'express';
import { routes } from '../api/routes';
import helmet from 'helmet';
import cors from 'cors';

export async function expressLoader(app: Application) {
  app.use(helmet());

  const ACCEPTED_ORIGINS = ['http://localhost:3000'];
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
}
