import { useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// usereff is used for point the node 
 export function App() {
   
   const inputvalue = useRef(null);

   const showData=()=>{
    const answer = inputvalue.current.value;
    console.log(answer);
   }
  return (
    <>
     <input type='text' ref={inputvalue}/>
     <button onClick={showData}>Click</button>
    </>
  )
}


