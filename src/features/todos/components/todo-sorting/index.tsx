import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../../../shared/store/store.ts';
import { todosActions } from '../../slices';

const TodoSorting = () => {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const dispatch = useAppDispatch();

  const handleCloseSorting = () => {
    setIsOpenSorting(!isOpenSorting);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.setSortingQuery(e.target.value));
    handleCloseSorting();
  };

  return (
    <section className={styles.sort}>
      <button onClick={handleCloseSorting} type="button">
        Sort by:
      </button>

      <ul className={`${styles.list} ${isOpenSorting ? `${styles.list_open}` : ''}`}>
        <li>
          <label className={styles.input}>
            <input name="sort" value="text" onChange={handleChange} type="radio" readOnly />
            Title
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="createdAt" onChange={handleChange} type="radio" readOnly />
            Date
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="isDone" onChange={handleChange} type="radio" readOnly />
            Completed
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="" onChange={handleChange} type="radio" readOnly />
            Reset sorting
          </label>
        </li>
      </ul>
    </section>
  );
};

export default TodoSorting;
