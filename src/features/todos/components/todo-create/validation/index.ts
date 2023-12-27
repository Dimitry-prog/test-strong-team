import { z } from 'zod';

export const todoCreateSchema = z.object({
  text: z.string().min(3, { message: 'At least 3 characters' }),
});

export type TodoCreateFormDataType = z.infer<typeof todoCreateSchema>;
