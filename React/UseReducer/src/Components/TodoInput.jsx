import { use, useContext, useEffect } from "react";
import { TodosValContext } from "../Context/TodoContext";
import * as types from '../Reducer/Action'
import { Reducer } from "../Reducer/Reducer";
// filter task and also do select all deselect all ,

export const TodoInput =()=>{
    const {state , dispatch, setTodo, text, setText}= useContext(TodosValContext);
    

    const handleAdd =()=>{
        dispatch({payload:text,type : types.ADD_TODO_ITEMS})

    }

    useEffect(()=>{
        setTodo(state);
    },[state]);

    return (
        <>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}