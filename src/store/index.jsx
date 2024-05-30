import { configureStore, createReducer } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import modeReducer from "./themesSlice"

const store = configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      mode: modeReducer,
    },
})

export default store;
