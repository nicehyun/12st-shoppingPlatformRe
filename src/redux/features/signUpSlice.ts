import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import { checkToAllAgreeClause } from "../utils/clause"

export type Clause = {
  all: boolean
  age: boolean
  term: boolean
  privacy: boolean
  marketing: boolean
}

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
  clause: Clause
  check: verifivationCheck
  isValid: isValid
  activeStep: number
}

const initialSignUpState: InitialSignUpState = {
  clause: {
    all: false,
    age: false,
    marketing: false,
    privacy: false,
    term: false,
  },
  check: { email: false, phone: false, address: false },
  isValid: { password: false, birth: false, name: false },
  activeStep: 0,
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    toggleAgreeToAgeClause(state) {
      state.clause.age = !state.clause.age

      if (checkToAllAgreeClause(state.clause)) state.clause.all = true
      if (!checkToAllAgreeClause(state.clause)) state.clause.all = false
    },
    toggleAgreeToTermClause(state) {
      state.clause.term = !state.clause.term

      if (checkToAllAgreeClause(state.clause)) state.clause.all = true
      if (!checkToAllAgreeClause(state.clause)) state.clause.all = false
    },
    toggleAgreeToPrivacyClause(state) {
      state.clause.privacy = !state.clause.privacy

      if (checkToAllAgreeClause(state.clause)) state.clause.all = true
      if (!checkToAllAgreeClause(state.clause)) state.clause.all = false
    },
    toggleAgreeToMarketingClause(state) {
      state.clause.marketing = !state.clause.marketing

      if (checkToAllAgreeClause(state.clause)) state.clause.all = true
      if (!checkToAllAgreeClause(state.clause)) state.clause.all = false
    },
    toggleAgreeToAllClause(state) {
      state.clause.all = !state.clause.all

      if (state.clause.all) {
        state.clause.age = true
        state.clause.term = true
        state.clause.privacy = true
        state.clause.marketing = true
        return
      }

      state.clause.age = false
      state.clause.term = false
      state.clause.privacy = false
      state.clause.marketing = false
    },
    resetAgree(state) {
      state.clause.all = false
      state.clause.age = false
      state.clause.term = false
      state.clause.privacy = false
      state.clause.marketing = false
    },

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
      state.clause.all = false
      state.clause.age = false
      state.clause.term = false
      state.clause.privacy = false
      state.clause.marketing = false
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
  toggleAgreeToAllClause,
  toggleAgreeToAgeClause,
  toggleAgreeToMarketingClause,
  toggleAgreeToPrivacyClause,
  toggleAgreeToTermClause,
  resetAgree,
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

export const seletSignUpClauseState = (state: RootState) => state.signUp.clause
export const selectSignUpCheckState = (state: RootState) => state.signUp.check
export const selectSignUpIsValidState = (state: RootState) =>
  state.signUp.isValid
export const selectSignUpActiveStepState = (state: RootState) =>
  state.signUp.activeStep

export default signUpSlice.reducer
