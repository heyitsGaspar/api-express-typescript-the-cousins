import { ProductRepository } from '../../../domain/repositories/products/productRespository';
import { Product } from '../../../domain/entities/products/product';

export class CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(product: Product): Promise<Product> {
    return this.productRepository.postProduct(product);
  }
}