import { Payment } from "@/features/checkout/views/PaymentButton"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import { checkToAllAgreeClauseByCheckout } from "../utils/clause"

export type CheckoutDeliveryInfoCheck = {
  recipient: boolean
  address: boolean
  phone: boolean
}

export type CheckoutPayment = {
  value: string
  label: string
}

export type CheckoutClauseCheck = {
  all: boolean
  collectionOfUserInfo: boolean
  provisionOfUserInfo: boolean
  paymentAgency: boolean
}

type InitialCheckoutState = {
  deliveryInfo: CheckoutDeliveryInfoCheck
  clause: CheckoutClauseCheck
  payment: CheckoutPayment
  plannedUseMile: number
}

const initialCartState: InitialCheckoutState = {
  deliveryInfo: {
    recipient: false,
    address: false,
    phone: false,
  },
  payment: {
    value: "credit",
    label: "신용/체크카드",
  },
  plannedUseMile: 0,
  clause: {
    all: false,
    collectionOfUserInfo: false,
    provisionOfUserInfo: false,
    paymentAgency: false,
  },
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialCartState,
  reducers: {
    resetDeliveryInfoCheck(state) {
      state.deliveryInfo.address = false
      state.deliveryInfo.phone = false
      state.deliveryInfo.recipient = false
    },
    checkToAddress(state) {
      state.deliveryInfo.address = true
    },
    uncheckToAddress(state) {
      state.deliveryInfo.address = false
    },
    checkToPhone(state) {
      state.deliveryInfo.phone = true
    },
    uncheckToPhone(state) {
      state.deliveryInfo.phone = false
    },
    checkToRecipient(state) {
      state.deliveryInfo.recipient = true
    },
    uncheckToRecipient(state) {
      state.deliveryInfo.recipient = false
    },
    resetSelectPayment(state) {
      state.payment.label = "신용/체크카드"
      state.payment.value = "credit"
    },
    selectPayment(
      state,
      action: PayloadAction<{ value: Payment; label: string }>
    ) {
      state.payment.label = action.payload.label
      state.payment.value = action.payload.value
    },
    resetPlannedUseMile(state) {
      state.plannedUseMile = 0
    },
    setPlannedUseMile(state, action: PayloadAction<number>) {
      state.plannedUseMile = action.payload
    },

    toggleCollectionOfUserInfoClause(state) {
      state.clause.collectionOfUserInfo = !state.clause.collectionOfUserInfo

      if (checkToAllAgreeClauseByCheckout(state.clause)) {
        state.clause.all = true
      } else {
        state.clause.all = false
      }
    },
    togglePaymentAgencyClause(state) {
      state.clause.paymentAgency = !state.clause.paymentAgency

      if (checkToAllAgreeClauseByCheckout(state.clause)) {
        state.clause.all = true
      } else {
        state.clause.all = false
      }
    },
    toggleprovisionOfUserInfoClause(state) {
      state.clause.provisionOfUserInfo = !state.clause.provisionOfUserInfo

      if (checkToAllAgreeClauseByCheckout(state.clause)) {
        state.clause.all = true
      } else {
        state.clause.all = false
      }
    },

    toggleAgreeToAllClause(state) {
      state.clause.all = !state.clause.all

      if (state.clause.all) {
        state.clause.collectionOfUserInfo = true
        state.clause.paymentAgency = true
        state.clause.provisionOfUserInfo = true

        return
      }

      state.clause.collectionOfUserInfo = false
      state.clause.paymentAgency = false
      state.clause.provisionOfUserInfo = false
    },
    resetAgree(state) {
      state.clause.all = false
      state.clause.collectionOfUserInfo = false
      state.clause.paymentAgency = false
      state.clause.provisionOfUserInfo = false
    },
  },
})

export const {
  resetDeliveryInfoCheck,
  checkToAddress,
  checkToPhone,
  checkToRecipient,
  uncheckToAddress,
  uncheckToPhone,
  uncheckToRecipient,
  resetSelectPayment,
  selectPayment,
  resetPlannedUseMile,
  setPlannedUseMile,
  resetAgree,
  toggleAgreeToAllClause,
  toggleCollectionOfUserInfoClause,
  togglePaymentAgencyClause,
  toggleprovisionOfUserInfoClause,
} = checkoutSlice.actions

export const selectCheckoutClauseState = (state: RootState) =>
  state.checkout.clause

export const selectCheckoutDeliveyInfoCheckState = (state: RootState) =>
  state.checkout.deliveryInfo

export const selectCheckoutPaymentState = (state: RootState) =>
  state.checkout.payment

export const selectCheckoutPlannedUseMileState = (state: RootState) =>
  state.checkout.plannedUseMile

export default checkoutSlice.reducer
