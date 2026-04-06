import { useState } from 'react'
// npm i @reduxjs/toolkit react-redux (install)
import './App.css'
import {Counter} from './Pages/Counter'
import { Todo } from './Pages/Todo'
import { ScratchCounterToolkit } from './Pages/ScratchCounterToolkit'

export const App=()=> {
  return (<>
      {/*<Counter />*/ } 
    {/* <Todo /> */}
    <ScratchCounterToolkit />
    </>
    )
}




