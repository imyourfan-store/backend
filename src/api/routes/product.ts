import { Request, Response, Router } from 'express';
import { createProduct, getProductById, getProducts } from '../components/products/product.controller';
import { tryCatch } from '../middlewares/asyncErrorHandler';

export function productRoutes(mainRouter: Router) {
  const router = Router();

  mainRouter.use('/products', router);

  router.post('/', tryCatch(createProduct));

  router.get('/', tryCatch(getProducts));

  router.get('/:id', tryCatch(getProductById));
}
