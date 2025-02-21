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
            let item = action.payload;
            state.items.push({...item, quantity:1})      
            state.totalQuantity += 1
            state.totalPrice = Number(state.totalPrice) + (Math.round(item.price*85.49)) ; 
        },
        removeItem: (state, action)=>{
            state.items.filter((item)=>{
                item.id !== action.payload
            })
        },
        updateQuantity: (state, action)=>{
            const {id, quantity} = action.payload
            console.log(id, quantity)
            const itemToUpdate = state.items.find((item)=> item.id === id)
            if(!itemToUpdate){
                return
            }else{
                if(quantity===1){
                    itemToUpdate.quantity +=1
                    state.totalPrice = Number(state.totalPrice) + (Math.round(itemToUpdate.price*85.49));
                }else if(quantity===-1){
                    itemToUpdate.quantity -=1
                    state.totalPrice = Number(state.totalPrice) - (Math.round(itemToUpdate.price*85.49));
                }
            }
        }
    },
})

export const {addItem, removeItem, updateQuantity}  = cartSlice.actions
export default cartSlice.reducer