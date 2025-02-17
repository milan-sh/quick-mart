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
                state.totalQuantity += 1;
            }
            // console.log("items are", JSON.parse(JSON.stringify(state.items)));
            state.totalPrice = Number(state.totalPrice) + (Math.round(item.price*85.49)) * (item.quantity || 1); 
        },
        removeItem: (state, action)=>{
            state.items.filter((item)=>{
                item.id !== action.payload
            })
        }
    },
})

export const {addItem, removeItem, updateQuantity}  = cartSlice.actions
export default cartSlice.reducer