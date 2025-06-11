import { Router } from 'express';
import { getProductsController, postProductController } from '../controllers/products/product.controller';

const productRouter = Router();
productRouter.get('/', getProductsController);
productRouter.post('/', postProductController);



export default productRouter;