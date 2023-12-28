import { useAppSelector } from '../../../shared/store/store.ts';
import { useGetTodosQuery } from '../services/get-todos.ts';

export const useFiltrationTodos = () => {
  const searchQuery = useAppSelector((state) => state.todos.searchQuery);
  const sortingQuery = useAppSelector((state) => state.todos.sortingQuery);
  const isSearchQuery = searchQuery ? `&q=${searchQuery}` : '';
  const isSortingQuery = sortingQuery ? `&_sort=${sortingQuery}` : '';
  const query = `${isSearchQuery}${isSortingQuery}`.replace('&', '?');
  const { data: filteredTodos, isLoading } = useGetTodosQuery(query);

  return {
    todos: filteredTodos,
    isLoading,
  };
};
