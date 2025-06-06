import { ProductRepository } from '../../../domain/repositories/products/productRespository';
import { Product } from '../../../domain/entities/products/product';

export class GetAllProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}