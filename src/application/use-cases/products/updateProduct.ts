import { ProductRepository } from '../../../domain/repositories/products/productRespository';
import { Product } from '../../../domain/entities/products/product';

export class UpdateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string, product: Product): Promise<Product> {
    return this.productRepository.updateProductId(id, product);
  }
}