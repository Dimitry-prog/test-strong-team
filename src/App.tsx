import { Route, Routes } from 'react-router-dom';
import TodoEdit from './features/todos/components/todo-edit';
import TodoSingle from './features/todos/components/todo-single';
import Todos from './features/todos/components/todos';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos/:id" element={<TodoSingle />} />
      <Route path="/todos/:id/edit" element={<TodoEdit />} />
    </Routes>
  );
};

export default App;
