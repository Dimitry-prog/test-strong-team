import styles from './styles.module.scss';
import TodoCreate from '../todo-create';
import TodoList from '../todo-list';
import TodoSearch from '../todo-search';
import TodoSorting from '../todo-sorting';

const Todos = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Todos</h1>
      <TodoCreate />
      <TodoList />
      <div className={styles.filters}>
        <TodoSearch />
        <TodoSorting />
      </div>
    </section>
  );
};

export default Todos;
