import { useState } from 'react'

import './App.css'

import { Data } from './Components/Data' 
import {Countes} from './Components/Counter'
import { AxiosData } from './Components/Axios'

  export function App(){
    const [count , setCount] = useState(0)

   const data = [
  {
    id: 1,
    name: "Shweta",
    age: 22
  },
  {
    id: 2,
    name: "Rahul",
    age: 25
  },
  {
    id: 3,
    name: "Amit",
    age: 24
  }
];

  return (
    <>
    <h1 id="count">count {count}</h1>
    <Countes xyz={{ setCount , count}} />
    <Data props = {{ data }}/>
    <AxiosData />
  
    </>
  )
}

