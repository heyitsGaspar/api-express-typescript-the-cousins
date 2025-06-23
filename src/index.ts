import express, {Request, Response} from 'express';
import productRouter from './interfaces/routes/products.routes';
import usersRouter from './interfaces/routes/users.routes';
import { errorHandler } from './interfaces/middlewares/errorHandler';
import { notFound } from './interfaces/middlewares/notFound';



const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');

});

app.use('/products', productRouter);
app.use('/users', usersRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

