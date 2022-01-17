import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalAmount: newItem.price,
          totalQuantity: 1,
        });
      } else {
        existingItem.totalAmount =
          existingItem.totalAmount + existingItem.price;
        existingItem.totalQuantity++;
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.totalQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.totalAmount =
          existingItem.totalAmount - existingItem.price;
        existingItem.totalQuantity--;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
