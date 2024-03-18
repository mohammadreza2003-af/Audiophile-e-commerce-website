import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./contexts/redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
