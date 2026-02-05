import { useState } from 'react'

import './App.css'

import { Data } from './Components/Data' 
import {Countes} from './Components/Counter'
import { AxiosData } from './Components/Axios'

  export function App(){
    const [count , setCount] = useState(0)

    const data = [

    ];

  return (
    <>
    <h1 id="count">count {count}</h1>
    <Countes xyz={{ setCount , count}} />
    <Data props = {{ data }}/>
    <AxiosData url = {API}/>
  
    </>
  )
}

