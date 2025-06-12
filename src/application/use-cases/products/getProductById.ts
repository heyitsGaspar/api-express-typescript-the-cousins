import { ProductRepository } from '../../../domain/repositories/products/productRespository';
import { Product } from '../../../domain/entities/products/product';

export class GetProductById {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return this.productRepository.getProductById(id);
  }
}