import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action)=>{
            const item = action.payload;
            const existingItem = state.items.find((i)=> i.id === item.id)
            if(existingItem){
                existingItem.quantity += 1; //update quantity if item exists
            }else{
                state.items.push({...item, quantity: item.quantity || 1}); //adding item if item doesn't exists
            }
            // console.log("items are", JSON.parse(JSON.stringify(state.items)));

            state.totalQuantity += 1
            state.totalPrice = Number(state.totalPrice) + (item.price*88) * (item.quantity || 1); 
        },
        removeItem: (state, action)=>{
            state.items.filter((item)=>{
                item.id !== action.payload
            })
        },
        updateQuantity: (state, action)=>{
            const item = state.items.findIndex((item)=> item.id === action.payload.id)
            item.quantity = action.payload.quantity
        }
    },
})

export const {addItem, removeItem, updateQuantity}  = cartSlice.actions
export default cartSlice.reducer