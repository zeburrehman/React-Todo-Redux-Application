import React from 'react';
import { todos as TodosList } from './todoSlice';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import NewTodo from './NewTodo';

const TodoList = () => {
  let todos = useSelector(TodosList);
  return (
    <div>
      <NewTodo/>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;
