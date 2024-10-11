import { User } from '@prisma/client';

export class UserFactory {
  static createUserFromDB = async (user: User) => {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    };
  };
}
