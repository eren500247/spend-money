import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: []};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const checkMenu = state.cartList.find((i) => i.id === id);
      if (checkMenu) {
        checkMenu.quantity += 1;
      } else {
        state.cartList.push(action.payload);
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
