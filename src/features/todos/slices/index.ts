import { createSlice } from '@reduxjs/toolkit';
import { getTodoById } from '../services/get-todo-by-id.ts';
import { getTodos } from '../services/get-todos.ts';
import { TodoType } from '../types';

type TodoStateType = {
  todos: TodoType[];
  todo: TodoType | null;
};

const initialState: TodoStateType = {
  todos: [],
  todo: null,
};

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(getTodos.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
      state.todos = payload;
    });
    builder.addMatcher(getTodoById.endpoints.getTodoById.matchFulfilled, (state, { payload }) => {
      state.todo = payload;
    });
  },
});

export const { reducer: todosReducer, actions: todosActions } = todoSlice;
