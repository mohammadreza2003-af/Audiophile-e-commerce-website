import { createSlice } from "@reduxjs/toolkit";
import { type initState } from "../data/type";

const initialState: initState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push(newItem);
      }
    },
    IncQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    DecQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
    DeleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    RemoveAll(state) {
      state.cart = [];
    },
  },
});

export const { AddItem, IncQuantity, DecQuantity, DeleteItem, RemoveAll } =
  cartSlice.actions;

export default cartSlice.reducer;
