import { ProductRepository } from "../../../domain/repositories/products/productRespository";
import { Product } from "../../../domain/entities/products/product";
import supabaseClient  from "../../../config/supabaseClient";

export class ProductSupabaseRepository implements ProductRepository {
    async getProducts(): Promise<Product[]> {
        const {data, error} = await supabaseClient
            .from('products')
            .select ('*')

        if (error){
            throw new Error(`Error fetching products: ${error.message}`);
        }
        return data as Product[];
    }

    async postProduct(product: Product): Promise<Product> {
        const {data, error} = await supabaseClient
            .from('products')
            .insert([product])
            .select('*')
            .single();

        if (error) {
            throw new Error(`Error inserting product: ${error.message}`);
        }

        return data as Product;
    }
}