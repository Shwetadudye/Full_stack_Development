import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { increment,decrement } from "../redux/CounterSlicer";

export const Counter=()=>{
    const dispatch =useDispatch();
    const {count} = useSelector((store)=>store.counter);
    console.log(count)

    return(
        <>
        <div>Counter {count}</div>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>dispatch(decrement())}>Dec</button>
        </>
    )
}