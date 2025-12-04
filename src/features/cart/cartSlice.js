import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
      if (item.quantity == 0)
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );

      item.totalPrice = item.unitPrice * item.quantity;
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getUserName = (state) => state.userAcc.userName;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId == id)?.quantity ?? 0;
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const { addItem, deleteItem, decreaseItem, increaseItem, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
