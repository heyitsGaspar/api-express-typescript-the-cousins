import { Router } from 'express';
import { getUsersController } from '../controllers/users/product.controller';

const usersRouter = Router();
usersRouter.get('/', getUsersController);

export default usersRouter;