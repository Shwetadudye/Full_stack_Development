
import {myStore} from '../Redux/Store';
import { DEPOSITE, WITHDRAW } from '../Redux/Action';
import { useState } from 'react';

export const Account = () =>{
    const {dispatch , subscribe } =myStore;
    const[jugad, setJugad] = useState(0);

    const handleDeposit =()=>{
        dispatch({type:DEPOSITE, payload:10});
    };

    subscribe(()=>{
        setJugad(jugad+1);
    });

    const handleWithdraw =()=>{
        dispatch({type:WITHDRAW, payload:20});
    };

    const handleDouble = ()=>{
        
    }

    return(
        <>
        <h1>Account {myStore.getState().amount}</h1>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        </>
    )
}