import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineSend } from 'react-icons/ai';
import { IoArrowBackOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import { TodoEditFormDataType, todoEditSchema } from './validation';
import { useGetTodoByIdQuery } from '../../services/get-todo-by-id.ts';
import { useUpdateTodoMutation } from '../../services/update-todo.ts';
import { TodoUpdateType } from '../../types';

const TodoEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: todo, isLoading, refetch } = useGetTodoByIdQuery(params.id as string);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TodoEditFormDataType>({
    defaultValues: {
      text: todo && todo.text,
      isDone: todo && todo.isDone,
    },
    resolver: zodResolver(todoEditSchema),
  });
  const [updateTodo] = useUpdateTodoMutation();

  const onSubmit: SubmitHandler<TodoEditFormDataType> = async (data) => {
    const updatedTodo: TodoUpdateType = {
      id: params.id as string,
      body: {
        text: data.text,
        isDone: data.isDone,
      },
    };

    await updateTodo(updatedTodo)
      .unwrap()
      .then(() => navigate('/'));
  };

  useEffect(() => {
    if (todo) {
      setValue('text', todo.text);
      setValue('isDone', todo.isDone);
    }
  }, [todo, setValue]);

  useEffect(() => {
    refetch();
  }, [params.id]);

  return (
    <section className={styles.edit}>
      <div className={styles.top}>
        <button onClick={() => navigate(-1)} type="button">
          <IoArrowBackOutline size={24} />
        </button>
        <h2>TodoEdit</h2>
      </div>

      {isLoading && <h2> LOADING...</h2>}

      {todo && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="isDone"
            control={control}
            render={({ field }) => (
              <div className={styles.checkbox}>
                <label>
                  <input type="checkbox" checked={field.value} onChange={field.onChange} />
                </label>
              </div>
            )}
          />

          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <div className={styles.input}>
                <input type="text" placeholder="Edit your task" {...field} />
                {errors.text && <span>{errors.text.message}</span>}
              </div>
            )}
          />
          <button type="submit" aria-label="submit btn">
            <AiOutlineSend />
          </button>
        </form>
      )}
    </section>
  );
};

export default TodoEdit;
