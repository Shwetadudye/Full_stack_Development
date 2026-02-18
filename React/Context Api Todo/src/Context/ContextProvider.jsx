 import React , {useState,createContext} from 'react'

 export const ContextValue = createContext(null);

 export const ContextTodo =  ({children}) =>{
    const[text, setText] = React.useState('');
    const[todo, setTodo]= React.useState([])

    return(
        <ContextValue.Provider value={{text ,setText,todo,setTodo}}>
             {children}
        </ContextValue.Provider>
    );
 };