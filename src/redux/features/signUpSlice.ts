import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type isValid = {
  password: boolean
  name: boolean
}

type InitialSignUpState = {
  isValid: isValid
}

const initialSignUpState: InitialSignUpState = {
  isValid: { password: false, name: false },
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    resetSignUpState(state) {
      state.isValid.password = false
      state.isValid.name = false
    },
    validatePassword(state) {
      state.isValid.password = true
    },
    validateName(state) {
      state.isValid.name = true
    },
    resetNameValid(state) {
      state.isValid.name = false
    },
    resetPasswordValid(state) {
      state.isValid.password = false
    },
  },
})

export const {
  resetSignUpState,
  validatePassword,
  validateName,
  resetPasswordValid,
  resetNameValid,
} = signUpSlice.actions

export const selectSignUpIsValidState = (state: RootState) =>
  state.signUp.isValid

export default signUpSlice.reducer
