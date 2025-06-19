import { ProductRepository } from '../../../domain/repositories/products/productRespository';
import { Product } from '../../../domain/entities/products/product';

interface PaginationParams{
  page: number;
  limit: number;
}

export class GetAllProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ page, limit }: PaginationParams): Promise<Product[]> {
    return await this.productRepository.getProducts({ page, limit });
  }
}