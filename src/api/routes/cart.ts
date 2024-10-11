import { Router } from 'express';
import { addProductToCart, createCart, getCart, removeProductFromCart } from '../components/cart/cart.controller';
import { authenticate } from '../middlewares/authenticate';
import { tryCatch } from '../middlewares/asyncErrorHandler';

export function cartRoutes(mainRouter: Router) {
  const router = Router();

  mainRouter.use('/cart', router);

  router.post('/', tryCatch(createCart));

  router.get('/', authenticate, tryCatch(getCart));

  router.post('/add-product', authenticate, tryCatch(addProductToCart));

  router.delete('/remove-product/:cartProductId', authenticate, tryCatch(removeProductFromCart));
}
