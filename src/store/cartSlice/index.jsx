import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice =  createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
          console.log(payload);
          state.push({...payload, count: 1});
        },
    },
});

export const {addToCart} = cartSlice.actions;   
export default cartSlice.reducer;