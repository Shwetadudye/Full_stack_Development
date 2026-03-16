
// import { loadData, saveData , delete_token} from '../Data/localStorage';
// import {LOGIN_REQUEST, LOGIN_SUCESS,LOGIN_FAILUER, REMOVE_TOKEN} from './Action'


// const key = 'token';

// let verify = loadData(key);

// const initialValue ={
//     user :[],
//     isAuth: verify ? true :false,
//     isToken: verify ||'',
//     isLoading: false,
//     isError:false,
// };

// const Reducer =(oldState = initialValue,{type , payload})=>{
//     switch(type){
//         case REMOVE_TOKEN:{
//             delete_token(key);
//             return{
//                 ...oldState,
//                 isLoading:false,
//                 isAuth: false,
//                 isToken: "",
//             }
//         }
//         case LOGIN_REQUEST:
//             return {
//                 ...oldState,
//                 isLoading:true,
//             };
//         case LOGIN_SUCESS:
//             saveData(key,payload.token);
//             return{
//                 oldState,
//                 isLoading:false,
//                 isAuth:true,
//                 user:[...oldState.user, payload.user],
//                 isToken:payload.token,
//             };
//         case LOGIN_FAILUER:
//             return{
//                 ...oldState,
//                 isError:true,
//             };
//         default:
//             return oldState;
//     }
// };

// export {Reducer}