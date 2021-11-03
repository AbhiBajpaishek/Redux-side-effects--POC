import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"uiSlice",
    initialState:{showCart:false},
    reducers:{
        toggleCart(state)
        {
            state.showCart = !state.showCart;
        }
    }
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;