import { CartDAL } from './cart.dal';
import { AddProductToCartSchema, CreateCartSchema } from './cart.schemas';

export class CartService {
  private cartDAL: CartDAL;

  constructor() {
    this.cartDAL = new CartDAL();
  }

  createCart = async ({ userId }: CreateCartSchema) => {
    const newCart = await this.cartDAL.createCart(userId);

    return newCart;
  };

  getCart = async (userId: string) => {
    const cart = await this.cartDAL.getCart(userId);

    return cart;
  };

  addProductToCart = async ({ quantity, productId }: AddProductToCartSchema, userId: string) => {
    const cart = await this.cartDAL.getCart(userId);

    const cartUpdated = await this.cartDAL.addProductToCart(quantity, productId, cart?.id as string, userId);

    return cartUpdated;
  };

  removeProductFromCart = async (cartProductId: string, userId: string) => {
    const cartUpdated = await this.cartDAL.removeProductFromCart(cartProductId, userId);

    return cartUpdated;
  };
}
