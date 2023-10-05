import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"
import checkoutSlice from "./features/checkoutSlice"
import couponSlice from "./features/couponSlice"
import modalSlice from "./features/modalSlice"
import signInSlice from "./features/signInSlice"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    signIn: signInSlice,
    modal: modalSlice,
    coupon: couponSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
})

export default store
