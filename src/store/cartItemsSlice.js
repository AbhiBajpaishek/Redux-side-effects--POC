import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    //{
    // id:"meals1",
    // mealsTitle:"Test Item",
    // mealsPrice:22.22,
    // mealsQuantity:1,
    // total:22.22
    //}
];
const cartItemsSlice = createSlice({
    name:"cartItems",
    initialState,
    reducers:{
        setMeals(action)
        {
            return action.payload; 
        },
        addMeals(state,action)
        {
            const existingItem = state.find(item => item.mealsTitle === action.payload.mealsTitle);
            const exists = existingItem ? true : false;
            if(exists){
                existingItem.mealsQuantity++;
                existingItem.total += existingItem.mealsPrice;
            }
            else{
                state.push(action.payload);
            }
        },
        removeMeals(state,action)
        {
            const id = action.payload;
            const existingItem = state.find(item => item.id === id);
            if(existingItem.mealsQuantity===1){
                return state.filter(item => item.id !== id);
            }
            else{
                existingItem.mealsQuantity-= 1;
                existingItem.total-=existingItem.mealsPrice;
            }
        }
    }
})

export const sendCartData = (cart) =>{
    return async()=>{
        const sendData = async () =>{
            const response = await fetch('https://food--ordering-default-rtdb.firebaseio.com/cart.json',
            {
                method:'PUT',
                type:'application/json',
                body:JSON.stringify(cart)
            });
            if(!response.ok)
            console.log('error logged');
        }
        await sendData();
    }
} 

export const getCartData = () =>{
    return async(dispatch)=>{
        const getData = async () =>{
            const response = await fetch('https://food--ordering-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok)
                console.log('error logged');
            const cart = await response.json();
            for(let key in cart){
                console.log(cart[key]);
                dispatch(cartItemsSlice.actions.addMeals(cart[key]));
            }
            //dispatch(cartItemsSlice.actions.setMeals({cart}));
        }
        await getData();
    }
} 

export const carttemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;