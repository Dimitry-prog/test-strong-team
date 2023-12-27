import { api } from '../../../shared/services/api.ts';
import { TodoType, TodoUpdateType } from '../types';

export const updateTodo = api.injectEndpoints({
  endpoints: (builder) => ({
    updateTodo: builder.mutation<TodoType, TodoUpdateType>({
      query: (data) => ({
        url: `/todos/${data.id}`,
        method: 'PATCH',
        body: data.body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg.id }],
    }),
  }),
});

export const { useUpdateTodoMutation } = updateTodo;
