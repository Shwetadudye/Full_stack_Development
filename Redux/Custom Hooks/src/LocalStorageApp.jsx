import { useState } from "react"
import { useLocalStorage } from "./Components/useLocalStorage";


// with
export const LocalStorageApp=()=>{
    const [data,setData]= useState({
        key :'',
        initialValue:'',
    });
    const [state,setState]= useLocalStorage("name","Shweta");


    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     setState(data);
    // };

    // const handleChange=()=>{
    //     const [name, value]= e.target;
    // };

    return(
        <>
        <h1>UseFetch Hook</h1>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your key" 
            onChange={handleChange}
            name="key"/>
            <input type="text" placeholder="enter your initial value"
            onChange ={handleChange}
            name="initialValue"/>
            <button type="submit">submit</button>
        </form> */}
        </>
    )
}