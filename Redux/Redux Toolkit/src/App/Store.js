import { configureStore } from "@reduxjs/toolkit";
import { counterSlicer } from "../redux/CounterSlicer";
import { TodoReducer } from "../redux/TodoSlicer";

export const myStore = configureStore({
    reducer:{
        counter:counterSlicer.reducer,
        todo: TodoReducer
    }
})