import { ProductRepository } from "../../../domain/repositories/products/productRespository";
import { Product } from "../../../domain/entities/products/product";
import supabaseClient  from "../../../config/supabaseClient";

export class ProductSupabaseRepository implements ProductRepository {
   
    async getProducts({ page, limit }: { page: number, limit: number }): Promise<Product[]> {
        const from = (page - 1) * limit;
        const to = page * limit;
        const {data, error} = await supabaseClient
            .from('products')
            .select ('*')
            .range(from, to) // Supabase uses zero-based indexing

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

    async getProductById(is: string): Promise<Product | null> {
        const {data, error} = await supabaseClient
            .from('products')
            .select('*')
            .eq('id', is)
            .single();

        if (error) {
            throw new Error(`Error fetching product by id: ${error.message}`);
        }

        return data as Product | null;
    }

    async updateProductId(id: string, product: Product): Promise<Product> {
        const {data, error} = await supabaseClient
            .from('products')
            .update(product)
            .eq('id', id)
            .select('*')
            .single();

        if (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }

        return data as Product;
    }
}