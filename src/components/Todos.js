import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col'>
        {todos.map((todo)=>
            <div key={todo.id} className='flex items-center gap-6'><li >{todo?.text}</li><button onClick={()=>dispatch(removeTodo(todo?.id))}>Delete</button></div>
        )}
    </div>
  )
}

export default Todos