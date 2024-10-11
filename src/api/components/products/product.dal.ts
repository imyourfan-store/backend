import { PrismaClient } from '@prisma/client';
import { CreateProductSchema, GetProductsSchema } from './product.schemas';

export class ProductDAL {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  getProductBySlug = async (slug: string) => {
    const product = await this.client.product.findUnique({
      where: {
        slug,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  };

  getProductById = async (id: string) => {
    const product = await this.client.product.findUnique({
      where: {
        id,
      },
      include: {
        Categories: true,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  };

  createProduct = async (data: CreateProductSchema) => {
    const { categories, ...rest } = data;

    const product = await this.client.product.create({
      data: {
        ...rest,
        Categories: {
          connect: categories.map((id) => ({ id })),
        },
      },
    });

    return product;
  };

  getProducts = async ({ query: { category } }: GetProductsSchema) => {
    const products = await this.client.product.findMany({
      orderBy: {
        name: 'asc',
      },
      where: {
        Categories: {
          some: {
            id: category,
          },
        },
      },
      include: {
        Categories: true,
      },
    });

    return products;
  };
}
