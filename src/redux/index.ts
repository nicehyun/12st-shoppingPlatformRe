import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"
import couponSlice from "./features/couponSlice"
import modalSlice from "./features/modalSlice"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    modal: modalSlice,
    coupon: couponSlice,
    cart: cartSlice,
  },
})

export default store
