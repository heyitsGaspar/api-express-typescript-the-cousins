import { Request, Response, NextFunction } from 'express';
import { GetAllProductUseCase } from '../../../application/use-cases/products/getAllProductUseCase';
import { ProductSupabaseRepository } from '../../../infraestructure/repositories/products/productSupabaseRepository';
import { CreateProduct } from '../../../application/use-cases/products/createProduct';
import { GetProductById } from '../../../application/use-cases/products/getProductById';
import { UpdateProduct } from '../../../application/use-cases/products/updateProduct';
import { paginationSchema } from '../../validators/paginationSchema';


const productRepository = new ProductSupabaseRepository();
export const getProductsController = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        const { page, limit } = paginationSchema.parse(req.query);
        const useCase = new GetAllProductUseCase(productRepository);
        const products = await useCase.execute({ page, limit });
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

export const getProductByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const useCase = new GetProductById(productRepository);
        const product = await useCase.execute(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error: any) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

export const updateProductController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const useCase = new UpdateProduct(productRepository);
        const updatedProduct = await useCase.execute(id, product);
        res.json(updatedProduct);
    } catch (error: any) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};