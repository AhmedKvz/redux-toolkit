import { createSlice } from "@reduxjs/toolkit";
import cartitems from "../../cartItems";
const initialState = {
  cartItems: cartitems,
  amount: 3,
  total: 5,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
