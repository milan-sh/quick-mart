import { configureStore } from "@reduxjs/toolkit";
import productReucer from "./productsSlice"

export const store = configureStore({
    reducer : {
        products: productReucer,
    }
})