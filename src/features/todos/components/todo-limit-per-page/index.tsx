import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../../../shared/store/store.ts';
import { useQuery } from '../../hooks/useQuery.ts';
import { todosActions } from '../../slices';

const TodoLimit = () => {
  const { limitQuery } = useQuery();
  const [isOpenLimit, setIsOpenLimit] = useState(false);
  const dispatch = useAppDispatch();

  const handleCloseLimit = () => {
    setIsOpenLimit(!isOpenLimit);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.setLimitQuery(parseInt(e.target.value)));
    handleCloseLimit();
  };

  return (
    <section className={styles.limit}>
      <div onClick={handleCloseLimit} className={styles.top}>
        <p> Limit per page:</p>
        <button type="button">{limitQuery}</button>
      </div>

      <ul className={`${styles.list} ${isOpenLimit ? `${styles.list_open}` : ''}`}>
        <li>
          <label className={styles.input}>
            <input name="sort" value="2" onChange={handleChange} type="radio" readOnly />2
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="5" onChange={handleChange} type="radio" readOnly />5
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="8" onChange={handleChange} type="radio" readOnly />8
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="sort" value="10" onChange={handleChange} type="radio" readOnly />
            10
          </label>
        </li>
      </ul>
    </section>
  );
};

export default TodoLimit;
