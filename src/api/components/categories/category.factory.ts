import { Category } from '@prisma/client';

export class CategoryFactory {
  static createCategoryFromDB = (category: Category) => {
    return {
      id: category.id,
      name: category.name,
    };
  };
}
