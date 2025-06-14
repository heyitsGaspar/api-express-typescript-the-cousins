import { Product } from '../../entities/products/product';

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
    postProduct(product: Product): Promise<Product>;
    getProductById(id: string): Promise<Product | null>;
    updateProductId(id: string, product: Product): Promise<Product>;

}