import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type verifivationCheck = {
  email: boolean
  phone: boolean
  address: boolean
}

export type isValid = {
  password: boolean
  birth: boolean
  name: boolean
}

type InitialSignUpState = {
  check: verifivationCheck
  isValid: isValid
  activeStep: number
}

const initialSignUpState: InitialSignUpState = {
  check: { email: false, phone: false, address: false },
  isValid: { password: false, birth: false, name: false },
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
    enterToAddress(state) {
      state.check.address = true
    },
    resetEmailDuplication(state) {
      state.check.email = false
    },
    resetSignUpState(state) {
      state.check.email = false
      state.check.phone = false
      state.check.address = false
      state.isValid.birth = false
      state.isValid.password = false
      state.isValid.name = false
    },
    resetSignUpPhoneCheck(state) {
      state.check.phone = false
    },
    resetSignUpAddressCheck(state) {
      state.check.address = false
    },
    validatePassword(state) {
      state.isValid.password = true
    },
    validateBirth(state) {
      state.isValid.birth = true
    },
    validateName(state) {
      state.isValid.name = true
    },
    resetBirthValid(state) {
      state.isValid.birth = false
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
  enterToAddress,
  resetEmailDuplication,
  resetSignUpState,
  resetSignUpPhoneCheck,
  resetSignUpAddressCheck,
  validatePassword,
  validateBirth,
  validateName,
  resetPasswordValid,
  resetBirthValid,
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
