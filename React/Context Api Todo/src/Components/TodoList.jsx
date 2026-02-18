import { useContext } from "react"

import { ContextValue } from "../Context/ContextProvider";

export const TodoList = ()=>{
    const {todo , setTodo } = useContext(ContextValue);


   const  handleEdit = (id)=>{
    const editItems = todo.map((el)=>
        el.id === id? {...el, isEdits:true}:el
    );
    setTodo (editItems);
   };
    
   const handleDelete = (id)=>{
    const deleteItems = todo.filter((el)=>
     el.id  !== id
    );
    setTodo(deleteItems);
   };

   if (todo.length ===0){
    return <h1>Please enter your data</h1>
   }
    return (
        <>
        <h1>Todo list</h1>

       { todo.map((el)=>(
        <div key ={el.id}>
            <p>{el.text}</p>
        
        <button onClick={()=>handleEdit(el.id)}>Edit</button>
        <button onClick= {()=> handleDelete(el.id)}>Delete</button>
        </div>
         ))}
               
        </>
    )
}