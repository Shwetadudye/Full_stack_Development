
//import {myStore} from '../Redux/Store';
import { DEPOSITE, DOUBLE, WITHDRAW } from '../Redux/Action';
//import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

export const Account = () =>{
    const dispatch = useDispatch();
    const value = useSelector((store)=>{
    console.log("store in selector hook " , store);
    return store.amount
    });
    
   // const {dispatch , subscribe } =myStore;
    // const[jugad, setJugad] = useState(0);

    const handleDeposit =()=>{
        dispatch({type:DEPOSITE, payload:10});
    };

    // subscribe(()=>{
    //     setJugad(jugad+1);
    // }); 

    const handleWithdraw =()=>{
        dispatch({type:WITHDRAW, payload:20});
    };

    const handleDouble = ()=>{
        dispatch({type: DOUBLE})
    }

    return(
        <>
       {/*<h1>Account {myStore.getState().amount}</h1>*/}
        <h1> Account {value }</h1>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={handleDouble}>Double</button>
        </>
    );
};
