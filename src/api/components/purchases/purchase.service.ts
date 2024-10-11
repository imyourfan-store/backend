import { CartService } from '../cart/cart.service';
import { PurchaseDAL } from './purchase.dal';

export class PurchaseService {
  private purchaseDAL: PurchaseDAL;
  private cartService: CartService;

  constructor() {
    this.purchaseDAL = new PurchaseDAL();
    this.cartService = new CartService();
  }

  purchaseCart = async (userId: string) => {
    const cart = await this.cartService.getCart(userId);
    if (!cart) {
      throw new Error('Cart not found');
    }

    const products = cart.Products.map((product) => ({
      id: product.Product.id,
      quantity: product.quantity,
    }));

    const purchase = await this.purchaseDAL.createPurchase(userId, products);

    return purchase;
  };

  getPurchases = async (userId: string) => {
    const purchases = await this.purchaseDAL.getPurchases(userId);

    return purchases;
  };
}
