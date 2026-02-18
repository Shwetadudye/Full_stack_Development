
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Components/Button'
import { Counter } from './Components/Counter'
import { Dummy } from './Components/dummy'

export const App=()=> {

  return (
    <>
    <h1>Hello</h1>
    <div style={{
       display: 'flex',
       justifyContent: 'center',
       alignContent: 'center',
       gap: '10px',
    }}>
      <h1>Counter</h1>
      <Counter/>
    </div>
     <Button/>
     <Dummy/>
    </>
  )
}


