import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/TodoSlicer";
import { Button } from "./Button";

export const TodoInput =()=>{
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    return (
        <div>
           <input type="text" onChange={(e)=>{
            setText(e.target.value);
           }}/>
           <Button functions ={()=>{
            dispatch(addTodo(text));
           }} label={'Add'} />

        </div>
    );
};