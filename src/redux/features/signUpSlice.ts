import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type verifivationCheck = {
  email: boolean
  phone: boolean
}

export type isValid = {
  password: boolean
  name: boolean
}

type InitialSignUpState = {
  check: verifivationCheck
  isValid: isValid
  activeStep: number
}

const initialSignUpState: InitialSignUpState = {
  check: { email: false, phone: false },
  isValid: { password: false, name: false },
  activeStep: 0,
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    checkToEmailDuplication(state) {
      state.check.email = true
    },
    verifyToPhone(state) {
      state.check.phone = true
    },

    resetEmailDuplication(state) {
      state.check.email = false
    },
    resetSignUpState(state) {
      state.check.email = false
      state.check.phone = false
      state.isValid.password = false
      state.isValid.name = false
    },
    resetSignUpPhoneCheck(state) {
      state.check.phone = false
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
      state.activeStep = 0
    },
  },
})

export const {
  checkToEmailDuplication,
  verifyToPhone,
  resetEmailDuplication,
  resetSignUpState,
  resetSignUpPhoneCheck,
  validatePassword,
  validateName,
  resetPasswordValid,
  resetNameValid,
  nextStep,
  resetStep,
} = signUpSlice.actions

export const selectSignUpCheckState = (state: RootState) => state.signUp.check
export const selectSignUpIsValidState = (state: RootState) =>
  state.signUp.isValid
export const selectSignUpActiveStepState = (state: RootState) =>
  state.signUp.activeStep

export default signUpSlice.reducer
