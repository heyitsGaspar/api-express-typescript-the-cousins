import { Product } from '../../entities/products/product';

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
}