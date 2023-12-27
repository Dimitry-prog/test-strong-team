import { api } from '../../../shared/services/api.ts';
import { TodoType } from '../types';

export const createTodo = api.injectEndpoints({
  endpoints: (builder) => ({
    createTodo: builder.mutation<TodoType, TodoType>({
      query: (body) => ({
        url: `/todos`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const { useCreateTodoMutation } = createTodo;
