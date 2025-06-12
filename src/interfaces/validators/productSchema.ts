import {z} from 'zod';

export const productSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
    description: z.string().max(500, 'Description must be less than 500 characters').optional(),
    price : z.number().min(1, 'Price is required').max(1000, 'Price must be less than 1000 characters'),

})