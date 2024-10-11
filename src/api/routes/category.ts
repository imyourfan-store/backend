import { Router } from 'express';
import { createCategory, getCategories } from '../components/categories/category.controller';
import { tryCatch } from '../middlewares/asyncErrorHandler';

export function categoryRoutes(mainRouter: Router) {
  const router = Router();

  mainRouter.use('/categories', router);

  router.post('/', tryCatch(createCategory));

  router.get('/', tryCatch(getCategories));
}
