import { useEffect, useState } from "react"


export const Counter =()=>{
  const [count , setCount] = React.useState(0);

  const handleInc =()=>{
    setCount(count+1);
  }
  const handleDec =()=>{
    setCount(count-1);
  };

  useEffect(()=>{
    let id = setInterval(()=>{
        console.log('Timer', Date.now());
     },200);
     console.log(id);
     return()=>{
        clearInterval(id);
     }
  },[count])


    return(
        <>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
       
        </>
    )
}