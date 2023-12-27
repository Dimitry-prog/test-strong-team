import { api } from '../../../shared/services/api.ts';
import { TodoType } from '../types';

export const getTodoById = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodoById: builder.query<TodoType, string>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodoByIdQuery } = getTodoById;
