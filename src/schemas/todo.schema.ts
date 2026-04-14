import { z } from 'zod';

export const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),

  // extra
  completedAt: z.string().nullable().optional(),
});

export const TodoListSchema = z.array(TodoSchema);

export type Todo = z.infer<typeof TodoSchema>;
