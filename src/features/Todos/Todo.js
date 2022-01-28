import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeTodo, markAsCompleted } from './todoSlice';

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="todo" onClick={() => dispatch(markAsCompleted(todo))}>
      <span style={ todo.completed ? { textDecoration:'line-through'} : {}}>
        {todo.id} - {todo.description}
      </span>
      
      <div className='todo-summary'>
        <span className='todo-status'>{todo.completed? "Completed": "In Progress"}</span>
        <span onClick={(e) => { dispatch(removeTodo(todo)); e.stopPropagation();}}><FaTrash  /></span>  
      </div> 
    </div>
  );
}
