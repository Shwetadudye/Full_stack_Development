 import React , {useState,createContext} from 'react'

 export const TodosValContext = createContext(null); 

 export const TodosContext =  ({children}) =>{
    const[text, setText] = useState('');
    const[todo, setTodo]= useState([])

    return(
        <TodosValContext.Provider value={{text ,setText,todo,setTodo}}>
             {children}
        </TodosValContext.Provider>
    );
 };