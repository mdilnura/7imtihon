import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // umumiy mahsulot soni
  cart: []  // savatchadagi mahsulotlar ro'yxati
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      state.cart.push(action.payload); // yangi mahsulot qo'shish
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        state.cart.pop(); // oxirgi mahsulotni o'chirish (test uchun oddiy)
      }
    },
    deleteItem: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1); // faqat bitta donasini o'chiradi
        state.value -= 1;
      }
    }
  },
});

export const { increment, decrement, deleteItem } = counterSlice.actions;
export default counterSlice.reducer;
