import { PrismaClient } from '@prisma/client';

export class CartDAL {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  createCart = async (userId: string) => {
    const cart = await this.client.cart.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return cart;
  };

  getCart = async (userId: string) => {
    const cart = await this.client.cart.findUnique({
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

    return cart;
  };

  addProductToCart = async (quantity: number, productId: string, cartId: string, userId: string) => {
    const cart = await this.client.cart.update({
      where: {
        userId,
      },
      data: {
        Products: {
          upsert: {
            where: {
              cartId_productId: {
                cartId,
                productId,
              },
            },
            update: {
              quantity: {
                increment: quantity,
              },
            },
            create: {
              productId,
              quantity,
            },
          },
        },
      },
    });

    return cart;
  };

  removeProductFromCart = async (cartProductId: string, userId: string) => {
    const cart = await this.client.cart.update({
      where: {
        userId,
      },
      data: {
        Products: {
          delete: {
            id: cartProductId,
          },
        },
      },
    });

    return cart;
  };
}
