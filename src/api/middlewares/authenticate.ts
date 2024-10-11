import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../services/jwt.service';
import { UserDAL } from '../components/users/user.dal';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.header('Authorization');
    if (!authorization) throw new Error('Invalid token');
    if (!authorization.startsWith('Bearer ')) throw new Error('Invalid token');

    const token = authorization.split(' ').at(1) || '';

    const payload = await JwtService.validateToken<{ id: string }>(token);
    if (!payload) throw new Error('Invalid token');

    const userDAL = new UserDAL();
    const user = await userDAL.getUserById(payload.id);
    if (!user) throw new Error('Invalid token');

    const { password, ...userWithoutPassword } = user;

    req.body.user = userWithoutPassword;

    next();
  } catch (err) {
    next(err);
  }
};
