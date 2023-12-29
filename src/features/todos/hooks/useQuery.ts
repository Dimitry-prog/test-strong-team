import { useAppSelector } from '../../../shared/store/store.ts';

export const useQuery = () => {
  const searchQuery = useAppSelector((state) => state.todos.searchQuery);
  const sortingQuery = useAppSelector((state) => state.todos.sortingQuery);
  const pageQuery = useAppSelector((state) => state.todos.pageQuery);
  const limitQuery = useAppSelector((state) => state.todos.limitQuery);
  const isSearchQuery = searchQuery ? `&q=${searchQuery}` : '';
  const isSortingQuery = sortingQuery ? `&_sort=${sortingQuery}` : '';
  const formattedPaginationQuery = `&_limit=${limitQuery}&_page=${pageQuery}`;

  const query = `${formattedPaginationQuery}${isSearchQuery}${isSortingQuery}`.replace('&', '?');

  const queryForCount = `${isSearchQuery}${isSortingQuery}`.replace('&', '?');

  return {
    query,
    queryForCount,
    pageQuery,
    limitQuery,
  };
};
