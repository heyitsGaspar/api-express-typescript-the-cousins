import { Router } from 'express';
import { getProductsController, postProductController , getProductByIdController } from '../controllers/products/product.controller';

const productRouter = Router();
productRouter.get('/', getProductsController);
productRouter.post('/', postProductController);
productRouter.get('/:id', getProductByIdController); // Assuming you want to get a product by ID as well



export default productRouter;