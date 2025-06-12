import { Router } from 'express';
import { getProductsController, postProductController , getProductByIdController } from '../controllers/products/product.controller';
import { validateData } from '../middlewares/productValidate';
import { productSchema } from '../validators/productSchema';

const productRouter = Router();
productRouter.get('/', getProductsController);
productRouter.post('/', validateData(productSchema), postProductController);
productRouter.get('/:id', getProductByIdController);



export default productRouter;