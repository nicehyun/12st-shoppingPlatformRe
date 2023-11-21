import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialSignInState = {
  isPrevSignIn: boolean
}

const initialSignInState: InitialSignInState = {
  isPrevSignIn: false,
}

const signInSlice = createSlice({
  name: "signIn",
  initialState: initialSignInState,
  reducers: {
    signIn(state) {
      state.isPrevSignIn = true
    },
  },
})

export const { signIn } = signInSlice.actions

export const selectSignInState = (state: RootState) => state.signIn

export default signInSlice.reducer
