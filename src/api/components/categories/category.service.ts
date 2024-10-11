import { CategoryDAL } from './category.dal';
import { CreateCategorySchema } from './category.schemas';

export class CategoryService {
  private categoryDAL: CategoryDAL;

  constructor() {
    this.categoryDAL = new CategoryDAL();
  }

  createCategory = async ({ name }: CreateCategorySchema) => {
    const category = await this.categoryDAL.getCategoryByName(name);
    if (category) {
      throw new Error('Category already exists');
    }

    const newCategory = await this.categoryDAL.createCategory(name);

    return newCategory;
  };

  getCategories = async () => {
    const categories = await this.categoryDAL.getCategories();

    return categories;
  };
}
