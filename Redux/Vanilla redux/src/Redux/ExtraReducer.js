import *  as types from '../Redux/Action';

// const initialValue = {
//     amount :100,
// };

const Reducer = (oldState ,{type, payload})=>{
    console.log(type);
    switch (type){
        case types.DOUBLE:
            return {
                ...oldState,
                amount: oldState.amount * 2,
            };
        case types.DEPOSITE:
             return{
                 ...oldState,
                 amount:oldState.amount + payload,
            };
        case types.WITHDRAW:
                return{
                     ...oldState,
                amount: oldState.amount - payload,
             };
            
            default:
             return oldState;
    }
}
export {Reducer};
