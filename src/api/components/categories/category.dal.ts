import { PrismaClient } from '@prisma/client';
import { CategoryFactory } from './category.factory';

export class CategoryDAL {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  getCategoryByName = async (name: string) => {
    const category = await this.client.category.findUnique({
      where: {
        name,
      },
    });

    if (!category) {
      return null;
    }

    return CategoryFactory.createCategoryFromDB(category);
  };

  createCategory = async (name: string) => {
    const category = await this.client.category.create({
      data: {
        name,
      },
    });

    return CategoryFactory.createCategoryFromDB(category);
  };

  getCategories = async () => {
    const categories = await this.client.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return categories.map((category) => CategoryFactory.createCategoryFromDB(category));
  };
}
