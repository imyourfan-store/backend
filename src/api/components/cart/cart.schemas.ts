import { z } from 'zod';

export const createCartSchema = z.object({
  userId: z.string().min(3).max(255),
});
export type CreateCartSchema = z.infer<typeof createCartSchema>;

export const addProductToCartSchema = z.object({
  quantity: z.number().int().positive(),
  productId: z.string().uuid(),
});
export type AddProductToCartSchema = z.infer<typeof addProductToCartSchema>;
