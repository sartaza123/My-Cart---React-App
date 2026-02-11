import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  // Cart state
  initialState: {
    items: [],
  },

  reducers: {
    // Add item or increase qty if already exists
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    // Increase quantity
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    // Decrease quantity (minimum 1)
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Empty cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, increaseQty, decreaseQty, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
