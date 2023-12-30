import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import { usePagination } from '../../hooks/usePagination.ts';
import { useQuery } from '../../hooks/useQuery.ts';

const TodoLimit = () => {
  const { limit } = useQuery();
  const { handleChangePagination } = usePagination();
  const [isOpenLimit, setIsOpenLimit] = useState(false);

  const handleCloseLimit = () => {
    setIsOpenLimit(!isOpenLimit);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = {
      [e.target.name]: e.target.value,
    };
    handleChangePagination(query);
    handleCloseLimit();
  };

  return (
    <section className={styles.limit}>
      <div onClick={handleCloseLimit} className={styles.top}>
        <p> Limit per page:</p>
        <button type="button">{limit}</button>
      </div>

      <ul className={`${styles.list} ${isOpenLimit ? `${styles.list_open}` : ''}`}>
        <li>
          <label className={styles.input}>
            <input name="limit" value="2" onChange={handleChange} type="radio" readOnly />2
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="limit" value="5" onChange={handleChange} type="radio" readOnly />5
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="limit" value="8" onChange={handleChange} type="radio" readOnly />8
          </label>
        </li>
        <li>
          <label className={styles.input}>
            <input name="limit" value="10" onChange={handleChange} type="radio" readOnly />
            10
          </label>
        </li>
      </ul>
    </section>
  );
};

export default TodoLimit;
