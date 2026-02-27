import {  createContext,useState } from "react";

export const AuthValContext = createContext(null);
export const AuthContext = ({children}) =>{
    const [auth, setAuth] =useState(falsel);
    const [loading,setLoading] =useState(false);
    const [error, setError] = useState(false);
    return(
        <AuthValContext.Provider value={{ auth,loading, error, setAuth ,setLoading, setError}}>
            {children}
        </AuthValContext.Provider>
    )
}