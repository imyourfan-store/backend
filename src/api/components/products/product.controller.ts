import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { createProductSchema, getProductByIdSchema, getProductsSchema } from './product.schemas';

const productService = new ProductService();

export const createProduct = async (req: Request, res: Response) => {
  const data = createProductSchema.parse(req.body);

  const product = await productService.createProduct(data);

  res.status(201).json({ product });
};

export const getProducts = async (req: Request, res: Response) => {
  const data = getProductsSchema.parse(req);

  const products = await productService.getProducts(data);

  res.status(200).json({ products });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = getProductByIdSchema.parse(req.params);

  const product = await productService.getProductById({ id });

  res.status(200).json({ product });
};
