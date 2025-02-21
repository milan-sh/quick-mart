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
            const itemToRemove = state.items.find((item)=> item.id === action.payload)
            console.log(itemToRemove)
            state.items = state.items.filter((item)=>{
                return item.id !== action.payload
            })
            state.totalQuantity -= 1;
            state.totalPrice = Number(state.totalPrice) - (Math.round(itemToRemove.price*85.49) * itemToRemove.quantity)

            console.log(JSON.parse(JSON.stringify(state.items)))
        },
        updateQuantity: (state, action)=>{
            const {id, quantity} = action.payload
            const itemToUpdate = state.items.find((item)=> item.id === id)
            if(!itemToUpdate){
                return
            }else{
                if(quantity===1){
                    itemToUpdate.quantity +=1
                    state.totalPrice = Number(state.totalPrice) + (Math.round(itemToUpdate.price*85.49));
                }else if(quantity===-1){
                    if(itemToUpdate.quantity===1){
                        return
                    }
                    itemToUpdate.quantity -=1
                    state.totalPrice = Number(state.totalPrice) - (Math.round(itemToUpdate.price*85.49));
                }
            }
        }
    },
})

export const {addItem, removeItem, updateQuantity}  = cartSlice.actions
export default cartSlice.reducer