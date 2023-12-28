import styles from './styles.module.scss';
import { useFiltrationTodos } from '../../hooks/useFiltrationTodos.ts';
import TodoItem from '../todo-item';

const TodoList = () => {
  const { todos, isLoading } = useFiltrationTodos();
  console.log(todos);

  return (
    <div className={styles.container}>
      {isLoading && <h2>LOADING...</h2>}

      {todos && !todos.length && <h2>You dont have any todos</h2>}

      {todos && (
        <ul className={styles.todos}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
