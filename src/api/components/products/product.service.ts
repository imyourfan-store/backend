import { ProductDAL } from './product.dal';
import { CreateProductSchema, GetProductByIdSchema, GetProductsSchema } from './product.schemas';

export class ProductService {
  private productDAL: ProductDAL;

  constructor() {
    this.productDAL = new ProductDAL();
  }

  createProduct = async (data: CreateProductSchema) => {
    const product = await this.productDAL.getProductBySlug(data.slug);
    if (product) {
      throw new Error('Product already exists');
    }

    const newProduct = await this.productDAL.createProduct(data);

    return newProduct;
  };

  getProducts = async (data: GetProductsSchema) => {
    const products = await this.productDAL.getProducts(data);

    return products;
  };

  getProductById = async (data: GetProductByIdSchema) => {
    const product = await this.productDAL.getProductById(data.id);

    return product;
  };
}
