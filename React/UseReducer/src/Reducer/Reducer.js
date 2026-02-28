import { act } from 'react';
import * as types from '../Reducer/Action'


export const Reducer = (oldState, action)=>{
    console.log(action.oldState);
    console.log(action.type);
    console.log(action.payload);
    

    switch(action.type){
        case types.ADD_TODO_ITEMS:
            return[
                ...oldState,{
                    id: oldState.length+1,
                    text: action.payload,
                    isEdits:false,
                    isCompleted: false,
                    isPinned: false,
                },
            ];

            case types.DELETE_TODO_ITEMS:
                return oldState.filter((items)=> items.id !== action.payload);

            case types.EDITS_TODO_ITEMS:
                return oldState.map((items)=> items.id === action.payload ? {...items, isEdits:true}: items);
            
            case types.PINNED_TODO_ITEM:
                const newpinitems = oldState.map((items)=> items.id === action.payload ? {...items, isPinned:true}: items);
                    return [...newpinitems].sort((a,b)=> b.isPinned - a.isPinned );
            

            default:
                return oldState;
    }
}