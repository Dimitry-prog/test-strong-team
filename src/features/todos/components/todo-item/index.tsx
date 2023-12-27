import { Link } from 'react-router-dom';
import { MdEdit, MdOutlineDeleteForever, MdRemoveRedEye } from 'react-icons/md';
import styles from './styles.module.scss';
import { useDeleteTodoMutation } from '../../services/delete-todo.ts';
import { useUpdateTodoMutation } from '../../services/update-todo.ts';
import { TodoType } from '../../types';

type TodoItemProps = {
  todo: TodoType;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggleStatusIsDone = async () => {
    const data = {
      id: todo.id,
      body: {
        isDone: !todo.isDone,
      },
    };

    await updateTodo(data);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <label>
          <input onChange={handleToggleStatusIsDone} type="checkbox" checked={todo.isDone} />
        </label>
        {todo.isDone ? <s>{todo.text}</s> : <h2>{todo.text}</h2>}
      </div>

      <div className={styles.bot}>
        <Link to={`/todos/${todo.id}`}>
          <MdRemoveRedEye size={24} />
        </Link>
        <Link to={`/todos/${todo.id}/edit`}>
          <MdEdit size={24} />
        </Link>
        <button onClick={handleDelete} type="button">
          <MdOutlineDeleteForever size={24} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
