import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

// TODO : 제거할 state 확인하기
export type isValid = {
  password: boolean
  name: boolean
}

type InitialSignUpState = {
  isValid: isValid
  activeStep: number
}

const initialSignUpState: InitialSignUpState = {
  isValid: { password: false, name: false },
  activeStep: 4,
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
    nextStep(state) {
      state.activeStep = state.activeStep + 1
    },
    resetStep(state) {
      state.activeStep = 4
    },
  },
})

export const {
  resetSignUpState,
  validatePassword,
  validateName,
  resetPasswordValid,
  resetNameValid,
  nextStep,
  resetStep,
} = signUpSlice.actions

export const selectSignUpIsValidState = (state: RootState) =>
  state.signUp.isValid
export const selectSignUpActiveStepState = (state: RootState) =>
  state.signUp.activeStep

export default signUpSlice.reducer
