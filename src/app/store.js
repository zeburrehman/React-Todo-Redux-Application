import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
});
