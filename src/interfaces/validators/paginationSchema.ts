import { z} from 'zod';

export const paginationSchema = z.object({
  page: z
    .string()
    .transform(Number)
    .refine((n) => n > 0, { message: 'page debe ser mayor que 0' })
    .optional()
    .default('1'),
  limit: z
    .string()
    .transform(Number)
    .refine((n) => n > 0 && n <= 100, { message: 'limit inválido' })
    .optional()
    .default('10'),
});