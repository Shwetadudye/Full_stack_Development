import { configureStore } from "@reduxjs/toolkit";
import { counterSlicer } from "../redux/CounterSlicer";

export const myStore = configureStore({
    reducer:{
        counter:counterSlicer.reducer,
        // todo: todoSlicer
    }
})