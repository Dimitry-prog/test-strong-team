import styles from './styles.module.scss';
import { usePagination } from '../../hooks/usePagination.ts';

const TodoPagination = () => {
  const { currentPage, totalPages, handleChangePage } = usePagination();

  return (
    <section className={styles.pagination}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          onClick={() => handleChangePage(index + 1)}
          type="button"
          key={index}
          className={`${styles.btn} ${currentPage === index + 1 ? `${styles.btn_active}` : ''}`}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </section>
  );
};

export default TodoPagination;
