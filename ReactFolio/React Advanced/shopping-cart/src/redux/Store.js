import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from "./Slices/cartSlice";
import CartReducer from "./Slices/cartSlice"


export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
})