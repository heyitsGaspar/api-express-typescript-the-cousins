import { Request, Response, NextFunction } from 'express';
import { GetAllProductUseCase } from '../../../application/use-cases/products/getAllProductUseCase';
import { ProductSupabaseRepository } from '../../../infraestructure/repositories/products/productSupabaseRepository';
import { CreateProduct } from '../../../application/use-cases/products/createProduct';


const productRepository = new ProductSupabaseRepository();
export const getProductsController = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        const useCase = new GetAllProductUseCase(productRepository);
        const products = await useCase.execute();
        res.json(products);
    } catch (error: any) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

export const postProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = req.body;
        const useCase = new CreateProduct(productRepository);
        const newProduct = await useCase.execute(product);
        res.status(201).json(newProduct);
    } catch (error: any) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}; 
