import { Request, Response } from 'express';
import { CategoryService } from './category.service';
import { createCategorySchema } from './category.schemas';

const categoryService = new CategoryService();

export const createCategory = async (req: Request, res: Response) => {
  const data = createCategorySchema.parse(req.body);

  const category = await categoryService.createCategory(data);

  res.status(201).json({ category });
};

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await categoryService.getCategories();

  res.status(200).json({ categories });
};
