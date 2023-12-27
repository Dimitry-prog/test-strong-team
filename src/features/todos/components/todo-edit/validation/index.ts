import { z } from 'zod';

export const todoEditSchema = z.object({
  isDone: z.boolean(),
  text: z.string().min(3, { message: 'At least 3 characters' }),
});

export type TodoEditFormDataType = z.infer<typeof todoEditSchema>;
