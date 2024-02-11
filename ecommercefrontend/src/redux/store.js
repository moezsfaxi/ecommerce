import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice , {cartMiddleware} from "./cartSlice"

export const store = configureStore({
    reducer:{
      cart :cartSlice,  
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(cartMiddleware)
})