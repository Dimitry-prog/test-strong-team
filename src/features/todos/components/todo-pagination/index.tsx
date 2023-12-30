import styles from './styles.module.scss';
import { usePagination } from '../../hooks/usePagination.ts';

const TodoPagination = () => {
  const { currentPage, totalPages, handleChangePagination } = usePagination();
  const page = parseInt(currentPage);

  return (
    <section className={styles.pagination}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          onClick={() =>
            handleChangePagination({
              page: (index + 1).toString(),
            })
          }
          type="button"
          key={index}
          className={`${styles.btn} ${page === index + 1 ? `${styles.btn_active}` : ''}`}
          disabled={page === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </section>
  );
};

export default TodoPagination;
