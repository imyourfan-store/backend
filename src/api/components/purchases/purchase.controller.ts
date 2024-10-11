import { Request, Response } from 'express';
import { PurchaseService } from './purchase.service';

const purchaseService = new PurchaseService();

export const purchaseCart = async (req: Request, res: Response) => {
  const { id } = req.body.user;

  const purchase = await purchaseService.purchaseCart(id);

  res.status(201).json({ purchase });
};

export const getPurchases = async (req: Request, res: Response) => {
  const { id } = req.body.user;

  const purchases = await purchaseService.getPurchases(id);

  res.status(200).json({ purchases });
};
