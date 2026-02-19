import { TodosValContext } from "../Context/TodoContext";

import { useContext } from "react";


export const TodoInput =()=>{
    const  {text ,setText,todo,setTodo} = useContext(TodosValContext);
   
   const handleAdd =()=>{
    if(text.trim()==='') return;

          const data = {
            id:Date.now(),
            text,
            isEdits: false,
            isCompleted: false,
          };

          setTodo((prev)=>[...prev,data]);
          setText('');
   };

   console.log(todo);
   
    return (
        <>
        <input value={text} name="todo_input" type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}