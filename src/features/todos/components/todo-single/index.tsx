import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import { useGetTodoByIdQuery } from '../../services/get-todo-by-id.ts';

const TodoSingle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: todo, isLoading, refetch } = useGetTodoByIdQuery(params.id as string);

  useEffect(() => {
    refetch();
  }, [params.id]);

  return (
    <section className={styles.todo}>
      {isLoading && <h2>LOADING...</h2>}

      <div className={styles.wrapper}>
        <button onClick={() => navigate(-1)} type="button">
          <IoArrowBackOutline size={24} />
        </button>
        {todo && (
          <div className={styles.info}>
            <h2>{todo.text}</h2>
            <p>{todo.isDone ? 'Task already completed!' : 'You need to finish this task'}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TodoSingle;
