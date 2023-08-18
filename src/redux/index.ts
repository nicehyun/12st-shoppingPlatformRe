import { configureStore } from "@reduxjs/toolkit"
import signUpSlice from "./features/signUpSlice"

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
  },
})

export default store
