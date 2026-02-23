import {Counter} from '../Pages/Counter';
import {Todo} from './../Pages/Todo';
import {About} from '../Pages/About';
import {Home} from '../Pages/Home';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../Components/PrivateRouters';
import {User} from '../Pages/User'
import {Login} from '../Pages/Login'

export const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/counter" element={<Counter/>}></Route>
            <Route path= "/todo" element ={<Todo />}></Route>
            <Route path= "/about" element= {<About/>}></Route>
            <Route path='/user' 
            element={
            <PrivateRoutes>
                <User />
            </PrivateRoutes>}>
            </Route>
            <Route path = '/login' element={<Login />}></Route>
        </Routes>        
    )
}