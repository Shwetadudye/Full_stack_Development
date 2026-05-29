import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Auth/Action';
import { useNavigate } from 'react-router-dom';

import { LOGIN_SUCCESS } from '../Redux/Auth/Action';

export const Login = () => {
    const location = useLocation();

    const [ email, setEmail]= React.useState('');
    const [password , setPassword] = React.useState('');

    console.log(location);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        Api.post(location.pathname,{email,password}) // axios automatically stringify the value .. if we use fetch then we have to do stringify
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    };

  return (
      <>
        <h1>Login</h1>
        <form onSubmit = {handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
               id="email"
               type="text"
               placeholder='enter youe email'
               onChange={(e)=>setEmail(e.target.value)}
               />
            <label htmlFor="password">Password</label>
            <input 
               id="password"
               type="text"
               placeholder="Enter your password"
               onChange={(e)=>setPassword(e.target.value)}
               />
            <button type="submit">Submit</button>
        </form>
        </>
  );
};
0