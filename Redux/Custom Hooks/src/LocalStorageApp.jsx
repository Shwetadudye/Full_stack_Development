import { useState } from "react"
import { useLocalStorage } from "./Components/useLocalStorage";


// with
export const LocalStorageApp=()=>{
    const [data,setData]= useState({
        key :'',
        initialValue:'',
    });
    const [state,setState]= useLocalStorage("name", "Shweta");


    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     setState(data.key,data.initialValue);
    // };

    //  const handleChange=(e)=>{
    //    const {name, value}= e.target;

    //    setData((prev)=>{
    //     return{
    //       ...prev,
    //     [name]:value
    //     }
    //    });
    //  };

    return(
        <>
        <h3>useLocalStorage Custom Hook</h3>
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