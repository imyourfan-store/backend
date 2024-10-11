import { Request, Response } from 'express';
import { CartService } from './cart.service';
import { addProductToCartSchema } from './cart.schemas';

const cartService = new CartService();

export const createCart = async (req: Request, res: Response) => {
  const { id } = req.body.user;

  const cart = await cartService.createCart({ userId: id });

  res.status(201).json({ cart });
};

export const getCart = async (req: Request, res: Response) => {
  const { id } = req.body.user;

  const cart = await cartService.getCart(id);

  if (!cart) {
    const newCart = await cartService.createCart({ userId: id });
    res.status(201).json({ cart: newCart });
    return;
  }

  res.status(200).json({ cart });
};

export const addProductToCart = async (req: Request, res: Response) => {
  const { productId, quantity } = addProductToCartSchema.parse(req.body);
  const { id } = req.body.user;

  const cart = await cartService.addProductToCart({ productId, quantity }, id);

  res.status(200).json({ cart });
};

export const removeProductFromCart = async (req: Request, res: Response) => {
  const { cartProductId } = req.params;
  const { id } = req.body.user;

  const cart = await cartService.removeProductFromCart(cartProductId, id);

  res.status(200).json({ cart });
};
