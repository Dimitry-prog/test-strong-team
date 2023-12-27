import { Route, Routes } from 'react-router-dom';
import TodoList from './features/todos/components/todo-list';
import TodoSingle from './features/todos/components/todo-single';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoSingle />} />
      </Routes>
    </main>
  );
};

export default App;
