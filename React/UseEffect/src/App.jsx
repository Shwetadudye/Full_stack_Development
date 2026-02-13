
import { useEffect, useState } from 'react'
import './App.css'

// useeffect : useeffect handle side effect and asynchronous behaviour 
// useeffect have 2 parameter : 1. ()=>{} callbacke func and 2. dependency

 export function App() {
  const [count , setCount] = useState(0);
  const handleClick =() =>{
    setCount((prev)=> prev+1);
  };

  useEffect(()=>{
    console.log('this is without dependency');
  });

  useEffect(()=>{
    console.log('this is with empty dependencies');
  },[]);

  useEffect(()=>{
    console.log('this is when count update than this effect depn work');
  },[count]);
  

  return (
    <>
    <h1>Hello</h1>
    <button onClick={handleClick}>Click</button>
    </>
  )
};


