import * as types from './Action'

const Reducer = (oldState,{type,payload})=>{
    switch(type){
        case types.DEPOSITE:
            return{
                ...oldState,
                amount:oldState.amount + payload,
            };
            case types.WITHDRAW:
                return{
                    ...oldState,
                    amount:oldState.amount - payload,
                };

                default:
                    return oldState;
    }
};

export {Reducer};