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

type InitialSignUpState = {
  clause: Clause
  check: verifivationCheck
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

    duplicateToEmail(state) {
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
      state.clause.age = false
      state.clause.term = false
      state.clause.privacy = false
      state.clause.marketing = false
      state.check.email = false
      state.check.phone = false
      state.check.address = false
    },
    resetSignUpPhoneCheck(state) {
      state.check.phone = false
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
  duplicateToEmail,
  verifyToPhone,
  enterToAddress,
  resetEmailDuplication,
  resetSignUpState,
  //   resetSignUpPhoneCheck,
} = signUpSlice.actions

export const seletSignUpClauseState = (state: RootState) => state.signUp.clause
export const selectSignUpCheckState = (state: RootState) => state.signUp.check

export default signUpSlice.reducer
