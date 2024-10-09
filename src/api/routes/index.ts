import { Router } from 'express';
import { authRoutes } from './auth';

export function routes() {
  const router = Router();

  router.get('/', (_req, res) => {
    res.status(200).send('OK!');
  });

  authRoutes(router);

  return router;
}
