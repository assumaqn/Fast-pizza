import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, decreaseItem, increaseItem, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
