import { Product } from '../../entities/products/product';

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
    postProduct(product: Product): Promise<Product>;
}