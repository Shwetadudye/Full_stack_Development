import { useContext } from "react"

import { TodosValContext} from "../Context/TodoContext"
import { Button } from "./Button";

export const TodoList = ()=>{
    const {todo , setTodo } = useContext(TodosValContext);


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

   const ButtonData =[
    {name:'Edit', func:handleEdit},
    {name:'Delete', func:handleDelete},
   ]
    return (
        <>
        <h1>Todo list</h1>

       { todo.map((el)=>(
        <div key ={el.id}>
            <p>{el.text}</p>
        {ButtonData?.map((el)=>(
            <Button props={el}/>
        ))}
       
        </div>
         ))}
               
        </>
    )
}