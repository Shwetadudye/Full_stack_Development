
import React ,{ children, createContext} from 'react'

export const ContextValue = createContext(null); // this allows share data without passing props 

export const ContextCounter =({children}) =>{
    const [count , setCount] = React.useState(0);
    return(
        <ContextValue.Provider value={({ count ,setCount})}>
            {children}
        </ContextValue.Provider>
    )
}