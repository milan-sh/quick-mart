import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0.00
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action)=>{
            const item = {
                id: action.payload.id,
                url: action.payload.url,
                title: action.payload.title,
                price: action.payload.price,
                quantity: action.payload.quantity,
                productTotal: action.payload.price 
            }
            state.items.push(item)
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

export const {addItem, removeItem, updateQuantity}  = cartSlice.reducer
export default cartSlice.reducer