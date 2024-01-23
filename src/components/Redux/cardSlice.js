import { createSlice } from "@reduxjs/toolkit";
const initialState={
    carts:[],
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            const item = {...action.payload}
            item.quantity = 1
            item.totalPrice = item.price
            state.carts.push(item)
        },
        changeQuantity:(state, action)=>{
            const {id, quantity} = action.payload
            const index = state.carts.findIndex(cartItem => cartItem.id === id)
            const item = {...state.carts[index]}
            if(item.quantity + quantity > 0){
                item.quantity = item.quantity + quantity
                item.totalPrice = item.price * item.quantity
                state.carts[index] = item
            }
            
        },
        removeItemCart:(state, action)=>{
            const id = action.payload
            state.carts = state.carts.filter(cartItem => cartItem.id !== id)
        },
       
    }
})
export const { addItem, changeQuantity, removeItemCart }=cartSlice.actions;
export default cartSlice.reducer;