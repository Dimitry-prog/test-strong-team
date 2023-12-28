import { ChangeEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../../../shared/store/store.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { todosActions } from '../../slices';

const TodoSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(search, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(todosActions.setSearchQuery(debouncedValue));
  }, [debouncedValue]);

  return (
    <section className={styles.search}>
      <div className={styles.input}>
        <input value={search} onChange={handleChange} type="text" placeholder="Search" />
      </div>
    </section>
  );
};

export default TodoSearch;
