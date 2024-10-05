import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  filterData: [],
  currentValue : 100000000000000 
};

export const allSlice = createSlice({
  name: "allSlice",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData = action.payload;
      state.filterData = action.payload;
    },
    increaseQuantity: (state, action) => {
      const checkData = state.allData.find((i) => i.id === action.payload);
      checkData.quantity += 1;
      checkData.price *= checkData.quantity;
      state.currentValue -= checkData.price
    },
    decreaseQuantity: (state, action) => {
      const checkData = state.allData.find((i) => i.id === action.payload);
      if (checkData.quantity > 1) {
        checkData.quantity -= 1;
        checkData.price /= (checkData.quantity + 1); // Revert to the unit price based on previous quantity and then adjust
        state.currentValue += checkData.price
        // checkData.price *= checkData.quantity;
      }
    },
  },
});
export const { addData, increaseQuantity ,decreaseQuantity} = allSlice.actions;
export default allSlice.reducer;
