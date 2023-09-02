import { configureStore } from "@reduxjs/toolkit"
import couponSlice from "./features/couponSlice"
import modalSlice from "./features/modalSlice"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    modal: modalSlice,
    coupon: couponSlice,
  },
})

export default store
