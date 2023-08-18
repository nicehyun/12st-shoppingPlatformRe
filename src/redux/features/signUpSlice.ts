import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type Clause = {
  age: boolean
  term: boolean
  privacy: boolean
  marketing: boolean
}

export type DuplicateCheck = {
  email: boolean
  phone: boolean
  address: boolean
}

type InitialSignUpState = {
  clause: Clause
  check: DuplicateCheck
}

const initialSignUpState: InitialSignUpState = {
  clause: { age: false, marketing: false, privacy: false, term: false },
  check: { email: false, phone: false, address: false },
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    toggleAgreeToAgeClause(state) {
      state.clause.age = !state.clause.age
    },
    toggleAgreeToTermClause(state) {
      state.clause.term = !state.clause.term
    },
    toggleAgreeToPrivacyClause(state) {
      state.clause.privacy = !state.clause.privacy
    },
    toggleAgreeToMarketinClause(state) {
      state.clause.marketing = !state.clause.marketing
    },
    agreeToAllClause(state) {
      state.clause.age = true
      state.clause.term = true
      state.clause.privacy = true
      state.clause.marketing = true
    },
    disagreeToAllClause(state) {
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
    registrateToAddress(state) {
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
  agreeToAllClause,
  disagreeToAllClause,
  toggleAgreeToAgeClause,
  toggleAgreeToMarketinClause,
  toggleAgreeToPrivacyClause,
  toggleAgreeToTermClause,
  //   duplicateToEmail,
  //   verifyToPhone,
  //   registrateToAddress,
  //   resetEmailDuplication,
  //   resetSignUpState,
  //   resetSignUpPhoneCheck,
} = signUpSlice.actions

export const seletSignUpClauseState = (state: RootState) => state.signUp.clause
// export const selectSignUpCheckState = (state: RootState) => state.signUp.check

export default signUpSlice.reducer
