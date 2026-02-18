import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoInput } from './Components/TodoInput'
import { TodoList } from './Components/TodoList'


export const  App=()=> {
  
  return (
    <>
    <TodoInput/>
    <TodoList />
      
    </>
  )
}


