import { PrismaClient } from '@prisma/client';

export class PurchaseDAL {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  createPurchase = async (userId: string, products: { id: string; quantity: number }[]) => {
    const purchase = await this.client.purchase.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
        Products: {
          create: products.map((product) => ({
            Product: {
              connect: {
                id: product.id,
              },
            },
            quantity: product.quantity,
          })),
        },
      },
    });

    return purchase;
  };

  getPurchases = async (userId: string) => {
    const purchases = await this.client.purchase.findMany({
      where: {
        userId,
      },
      include: {
        Products: {
          include: {
            Product: true,
          },
        },
      },
    });

    return purchases;
  };
}
