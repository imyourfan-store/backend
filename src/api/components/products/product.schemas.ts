import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  price: z.number().positive(),
  stock: z.number().int().positive(),
  categories: z.array(z.string().uuid()).nonempty(),
  productImgs: z.array(z.string().url()).nonempty(),
});
export const getProductsSchema = z.object({
  query: z.object({
    category: z.string().uuid().optional(),
    search: z.string().optional(),
  }),
});
export const getProductByIdSchema = z.object({
  id: z.string().uuid(),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
export type GetProductsSchema = z.infer<typeof getProductsSchema>;
export type GetProductByIdSchema = z.infer<typeof getProductByIdSchema>;
