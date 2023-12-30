import { useAppSelector } from '../../../shared/store/store.ts';
import { formattedQuery } from '../../../shared/utils/formatted-query.ts';

export const useQuery = () => {
  const queryObj = useAppSelector((state) => state.todos.query);
  const queryForCountObj = {
    q: queryObj.q,
    sort: queryObj.sort,
  };

  const query = formattedQuery(queryObj);
  const queryForCount = formattedQuery(queryForCountObj);

  return {
    query,
    queryForCount,
    page: queryObj.page,
    limit: queryObj.limit,
  };
};
