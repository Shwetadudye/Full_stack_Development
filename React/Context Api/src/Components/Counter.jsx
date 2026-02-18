import { useContext } from "react";

import { ContextValue } from "../Context/ContextProvider";

export const Counter = () =>{
    const { count} = useContext(ContextValue);

    return(
        <>
        <h1> {count}</h1>
        </>
    )
}