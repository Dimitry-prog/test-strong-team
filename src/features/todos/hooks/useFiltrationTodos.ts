import { useQuery } from './useQuery.ts';
import { useGetTodosQuery } from '../services/get-todos.ts';

export const useFiltrationTodos = () => {
  const { query } = useQuery();
  const { data: filteredTodos, isLoading } = useGetTodosQuery(query);

  return {
    todos: filteredTodos,
    isLoading,
  };
};
