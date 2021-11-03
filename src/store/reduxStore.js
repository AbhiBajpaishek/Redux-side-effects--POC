import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './cartItemsSlice';
import toggleCartReducer from './uiSlice';

const store = configureStore({
    reducer:{
        cartItems:cartItemReducer,
        ui:toggleCartReducer
    }
});

export default store;