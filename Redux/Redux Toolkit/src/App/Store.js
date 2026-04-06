import { configureStore } from "@reduxjs/toolkit";
import { counterSlicer } from "../redux/CounterSlicer";
import { TodoReducer } from "../redux/TodoSlicer";
import { reducerToolkit } from "../redux/Understanding_Toolkit/reducerToolkit";

export const myStore = configureStore({
    reducer:{
        counter:counterSlicer.reducer,
        todo: TodoReducer,
        scratchReducer : reducerToolkit,
    }
})