 import React , {useState,createContext, useReducer} from 'react'
import { Reducer } from '../Reducer/Reducer';

 export const TodosValContext = createContext(null); 

 export const TodosContext =  ({children}) =>{
    const[text, setText] = useState('');
    const[todo, setTodo]= useState([]);
    const[ state, dispatch] = useReducer(Reducer, todo);

    return(
        <TodosValContext.Provider value={{text ,setText,todo,setTodo, state, dispatch}}>
             {children}
        </TodosValContext.Provider>
    );
 };