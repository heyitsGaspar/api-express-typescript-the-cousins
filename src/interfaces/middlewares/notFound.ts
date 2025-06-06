import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../../shared/errors/AppError';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError('La ruta solicitada no existe'));
};