import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        heightValue: 0,
    },
    reducers:{
        handleHeightValue:(state,action)=>{
            state.heightValue = action.payload;

        }
    }
});


export const {handleHeightValue} = counterSlice.actions;

export default counterSlice.reducer

