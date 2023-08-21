import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./features/modalSlice"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    modal: modalSlice,
  },
})

export default store
