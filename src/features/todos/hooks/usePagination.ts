import { useQuery } from './useQuery.ts';
import { useAppDispatch } from '../../../shared/store/store.ts';
import { useGetTodosQuery } from '../services/get-todos.ts';
import { todosActions } from '../slices';

export const usePagination = () => {
  const { queryForCount, page, limit } = useQuery();
  const { data: todos, isLoading } = useGetTodosQuery(queryForCount);
  const dispatch = useAppDispatch();
  const totalPages = Math.ceil((todos?.length || 0) / parseInt(limit));

  const handleChangePagination = (query: { [K: string]: string }) => {
    dispatch(todosActions.setQuery(query));
  };

  return {
    isLoading,
    totalPages,
    currentPage: page,
    handleChangePagination,
  };
};
