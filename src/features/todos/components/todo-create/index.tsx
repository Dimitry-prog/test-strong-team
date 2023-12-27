import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineSend } from 'react-icons/ai';
import styles from './styles.module.scss';
import { TodoCreateFormDataType, todoCreateSchema } from './validation';
import { useCreateTodoMutation } from '../../services/create-todo.ts';
import { TodoType } from '../../types';

const TodoCreate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoCreateFormDataType>({
    defaultValues: {
      text: '',
    },
    resolver: zodResolver(todoCreateSchema),
  });
  const [createTodo] = useCreateTodoMutation();

  const onSubmit: SubmitHandler<TodoCreateFormDataType> = async (data) => {
    const todo: TodoType = {
      id: uuidv4(),
      text: data.text,
      isDone: false,
      createdAt: new Date(),
    };

    await createTodo(todo)
      .unwrap()
      .then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <div className={styles.input}>
            <input type="text" placeholder="What need to be done?" {...field} />
            {errors.text && <span>{errors.text.message}</span>}
          </div>
        )}
      />
      <button type="submit" aria-label="submit btn">
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default TodoCreate;
