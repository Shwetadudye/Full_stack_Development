import React from 'react'
import {Login} from './Components/Login'
import { AllRoutes } from './Routes/AllRoutes'
import {Navbar} from './Components/Navbar'

export const App =()=>{
  return(
    <>
    <Navbar />
    <AllRoutes />
    </>
  )
}

// private selector + useselector and dispatch 
// auth true 
// todo = todoinput - todolist - pages -todo - routing - todo (todo element)
//navbar - active change color 
// private auth


//full todo app [with redux]
