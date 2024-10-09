import { BcryptService } from '@/api/services/bcrypt.service';
import { UserDAL } from '../user/user.dal';
import { LoginSchema, SignupSchema } from './auth.schemas';
import { JwtService } from '@/api/services/jwt.service';

export class AuthService {
  private userDAL: UserDAL;

  constructor() {
    this.userDAL = new UserDAL();
  }

  signup = async (data: SignupSchema) => {
    const user = await this.userDAL.getUserByEmail(data.email);
    if (user) {
      throw new Error('User already exists');
    }

    data.password = BcryptService.hash(data.password);

    const newUser = await this.userDAL.createUser(data);

    const { password, ...userWithoutPassword } = newUser;

    const token = JwtService.generateToken(userWithoutPassword, '1d');

    return { user: userWithoutPassword, token };
  };

  login = async (data: LoginSchema) => {
    const user = await this.userDAL.getUserByEmail(data.email);
    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = BcryptService.compare(data.password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;

    const token = JwtService.generateToken(userWithoutPassword, '1d');

    return { user: userWithoutPassword, token };
  };
}
