import styles from './styles.module.scss';
import TodoCreate from '../todo-create';
import TodoList from '../todo-list';

const Todos = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Todos</h1>
      <TodoCreate />
      <TodoList />
    </section>
  );
};

export default Todos;
