import { useQuery } from './useQuery.ts';
import { useAppDispatch } from '../../../shared/store/store.ts';
import { useGetTodosQuery } from '../services/get-todos.ts';
import { todosActions } from '../slices';

export const usePagination = () => {
  const { queryForCount, pageQuery, limitQuery } = useQuery();
  const { data: todos, isLoading } = useGetTodosQuery(queryForCount);
  const dispatch = useAppDispatch();
  const totalPages = Math.ceil((todos?.length || 0) / limitQuery);

  const handleChangePage = (page: number) => {
    dispatch(todosActions.setPageQuery(page));
  };

  const handleChangeLimit = (limit: number) => {
    dispatch(todosActions.setLimitQuery(limit));
  };

  return {
    isLoading,
    totalPages,
    currentPage: pageQuery,
    handleChangePage,
    handleChangeLimit,
  };
};
