import { api } from '../../../shared/services/api.ts';
import { TodoType } from '../types';

export const getTodos = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], string>({
      query: (query) => `/todos${query}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const { useGetTodosQuery } = getTodos;
