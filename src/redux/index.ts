import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"
import checkoutSlice from "./features/checkoutSlice"
import couponSlice from "./features/couponSlice"
import modalSlice from "./features/modalSlice"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    modal: modalSlice,
    coupon: couponSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
  },
})

export default store
