import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema } from 'zod';


export const validateData = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
           if (error instanceof ZodError) {
                return res.status(400).json({
                    errors: error.errors.map(err => ({ [err.path[0]]: err.message }))
                });
            }
            next(error);
        }
    };
  
};