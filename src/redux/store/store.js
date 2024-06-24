import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../sliceredux/sliceCounter";

export const store = configureStore({
    reducer:{
        allState:counterSlice
    }
})