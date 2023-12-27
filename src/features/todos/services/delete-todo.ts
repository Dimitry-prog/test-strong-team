import { api } from '../../../shared/services/api.ts';
import { TodoType } from '../types';

export const deleteTodo = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteTodo: builder.mutation<TodoType, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const { useDeleteTodoMutation } = deleteTodo;
