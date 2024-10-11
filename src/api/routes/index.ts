import { Router } from 'express';
import { authRoutes } from './auth';
import { categoryRoutes } from './category';
import { productRoutes } from './product';
import { cartRoutes } from './cart';
import { purchaseRoutes } from './purchase';

export function routes() {
  const router = Router();

  router.get('/', (_req, res) => {
    res.status(200).send('OK!');
  });

  authRoutes(router);
  categoryRoutes(router);
  productRoutes(router);
  cartRoutes(router);
  purchaseRoutes(router);

  return router;
}
