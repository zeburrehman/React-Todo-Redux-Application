import { createSlice } from '@reduxjs/toolkit';

const initialValue = [
 
];

const todoSlicer = createSlice({
  initialState: initialValue,
  name: "todos",
  reducers: {
    addTodo(state, action) {
      let id = state.length + 1;
      state.push({ id, description: action.payload, completed: false });
    },
    removeTodo(state, action) {
      let todo = state.find(x => x.id === action.payload.id);
      if(!todo) return;
      let index = state.indexOf(todo);
      if (index === -1) return;
      state.splice(index, 1);
    },
    markAsCompleted(state, action) {
      const todo = state.find(x => x.id === action.payload.id);
      if (!todo) return;
      todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, removeTodo, markAsCompleted } = todoSlicer.actions;
export const todos = (state) => state.todos;
export default todoSlicer.reducer;