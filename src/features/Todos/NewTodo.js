import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice'

const NewTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <form className="input-group" onSubmit={(e) => { dispatch(addTodo(description)); setDescription(''); e.preventDefault(); }}>
        <input type="text" onChange={e => setDescription(e.target.value)} value={description}/>
        <input type="submit" value="Create New Todo" />
      </form>
    </div>
  );
};

export default NewTodo;
