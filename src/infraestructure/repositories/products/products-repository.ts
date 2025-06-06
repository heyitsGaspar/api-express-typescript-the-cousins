import { Product } from '../../../domain/entities/products/product-entity';

interface ProductsRepository {
    getProducts(): Promise<Product[]>;
}

export default ProductsRepository;