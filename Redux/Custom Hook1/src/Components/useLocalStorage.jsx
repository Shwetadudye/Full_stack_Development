import { useEffect } from "react";


export const useLocalStorage = (key , initialValue)=>{

    const [value , setValue] = useState(initialValue);

    useEffect(()=>{
     localStorage.setItem(key,JSON.stringify(value));
    },[key,value])
}