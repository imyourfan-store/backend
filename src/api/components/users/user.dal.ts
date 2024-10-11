import { PrismaClient } from '@prisma/client';
import { UserFactory } from './user.factory';
import { SignupSchema } from '../auth/auth.schemas';

export class UserDAL {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  createUser = async (data: SignupSchema) => {
    const user = await this.client.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return UserFactory.createUserFromDB(user);
  };

  getUserByEmail = async (email: string) => {
    const user = await this.client.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return UserFactory.createUserFromDB(user);
  };

  getUserById = async (id: string) => {
    const user = await this.client.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return UserFactory.createUserFromDB(user);
  };
}
