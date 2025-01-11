import { configureStore } from "@reduxjs/toolkit";
import productReucer from "./productsSlice"
import cartSlice from "./cartSlice"

export const store = configureStore({
    reducer : {
        products: productReucer,
        cart: cartSlice,
    }
})