import { createSlice } from '@reduxjs/toolkit';
import { getTodoById } from '../services/get-todo-by-id.ts';
import { getTodos } from '../services/get-todos.ts';
import { TodoType } from '../types';

type TodoStateType = {
  todos: TodoType[];
  todo: TodoType | null;
  searchQuery: string;
  sortingQuery: string;
  pageQuery: number;
  limitQuery: number;
  query: {
    [K: string]: string;
  };
};

const initialState: TodoStateType = {
  todos: [],
  todo: null,
  searchQuery: '',
  sortingQuery: '',
  pageQuery: 1,
  limitQuery: 2,
  query: {
    page: '1',
    limit: '2',
    q: '',
    sort: '',
  },
};

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }: { payload: string }) => {
      state.searchQuery = payload;
    },
    setSortingQuery: (state, { payload }: { payload: string }) => {
      state.sortingQuery = payload;
    },
    setPageQuery: (state, { payload }: { payload: number }) => {
      state.pageQuery = payload;
    },
    setLimitQuery: (state, { payload }: { payload: number }) => {
      state.limitQuery = payload;
    },
    setQuery: (
      state,
      {
        payload,
      }: {
        payload: {
          [K: string]: string;
        };
      }
    ) => {
      state.query = Object.assign(state.query, payload);
    },
  },
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
