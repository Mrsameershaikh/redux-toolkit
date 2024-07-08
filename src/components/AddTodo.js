import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";


const AddTodo = () => {

    const [input, setInput] = useState('');
    const dispatch= useDispatch();


    const addTodohanlder = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <>
      <h1 className="text-lg font-medium">TODO LIST</h1>
      <div className="flex items-center gap-5">
        <form onSubmit={addTodohanlder}>
        <input type="text" className="border-2 border-gray-600" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button className="bg-blue-400 p-2 rounded-md h-8 flex items-center" type="submit">
          Add Todo
        </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
