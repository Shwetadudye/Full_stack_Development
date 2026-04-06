import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Components/Button";
import { decrement, increment } from "../redux/Understanding_Toolkit/actionToolkit";



export const ScratchCounterToolkit = ()=>{
    const dispatch = useDispatch();
    const {count} = useSelector((store)=> store.scratchReducer);
    console.log(count);

    return(
        <>
        <div>Counter {count}</div>
        <Button functions={()=>dispatch({type:increment})} label={'inc'}>Increment</Button>
        <Button functions={()=>dispatch({type: decrement})} label={'dec'}>Decrement</Button>
        </>
    )

}