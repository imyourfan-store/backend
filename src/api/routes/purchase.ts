import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { tryCatch } from '../middlewares/asyncErrorHandler';
import { getPurchases, purchaseCart } from '../components/purchases/purchase.controller';

export function purchaseRoutes(mainRouter: Router) {
  const router = Router();

  mainRouter.use('/purchases', router);

  router.post('/', authenticate, tryCatch(purchaseCart));

  router.get('/', authenticate, authenticate, tryCatch(getPurchases));
}
