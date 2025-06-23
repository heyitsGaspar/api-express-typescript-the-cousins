import { Request, Response, NextFunction } from 'express';
import { GetUsersUseCase } from '../../../application/use-cases/users/getUsersUseCase';
import { UsersSupabaseRepository } from '../../../infraestructure/repositories/users/usersSupabaseRepository';
import { paginationSchema } from '../../validators/paginationSchema';

const usersRepository = new UsersSupabaseRepository();
export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        const { page, limit } = paginationSchema.parse(req.query);
        const useCase = new GetUsersUseCase(usersRepository);
        const users = await useCase.execute({ page, limit });
        res.json(users);
    } catch (error: any) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};