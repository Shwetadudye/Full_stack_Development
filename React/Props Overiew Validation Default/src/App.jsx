
import './App.css'
import {NameShow2} from './Components/NameShow2'
import {NameShow} from './Components/NameShow'

export const App = () =>{
    return<>
     <h1> Props</h1>
     <NameShow label={'shweta'} age ={22}/>
     <NameShow />
     <NameShow age={22}/>

     <NameShow2/>
     <NameShow2 name='shweta' age='22' label='FSD'/>
     <NameShow2 name= 'shweta' age='22'/>
    </>
};
