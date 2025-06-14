import { Router } from 'express';
import { getProductsController, postProductController , getProductByIdController, updateProductController } from '../controllers/products/product.controller';
import { validateData } from '../middlewares/productValidate';
import { productSchema, productSchemaUpdate } from '../validators/productSchema';

const productRouter = Router();
productRouter.get('/', getProductsController);
productRouter.post('/', validateData(productSchema), postProductController);
productRouter.get('/:id', getProductByIdController);
productRouter.put('/:id', validateData(productSchemaUpdate), updateProductController);



export default productRouter;