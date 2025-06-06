import { Router } from 'express';
import { getProductsController } from '../controllers/products/product.controller';

const productRouter = Router();
productRouter.get('/', getProductsController);

export default productRouter;