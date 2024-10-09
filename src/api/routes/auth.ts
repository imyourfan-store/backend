import { Request, Response, Router } from 'express';
import { login, signup } from '../components/auth/auth.controller';

export function authRoutes(mainRouter: Router) {
  const router = Router();

  mainRouter.use('/auth', router);

  router.post('/signup', async (req: Request, res: Response) => signup(req, res));

  router.post('/login', async (req: Request, res: Response) => login(req, res));
}
