


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // umumiy mahsulot soni
  cart: []  // [{id, name, price, image, quantity}]
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.value += 1;
    },
    decrement: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity -= 1;
        state.value -= 1;
        if (existingItem.quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
    deleteItem: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        state.value -= existingItem.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload);
      }
    }
  },
});

export const { increment, decrement, deleteItem } = counterSlice.actions;
export default counterSlice.reducer;

