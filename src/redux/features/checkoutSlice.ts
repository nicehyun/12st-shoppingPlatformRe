import { Payment } from "@/features/checkout/PaymentButton"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type CheckoutDeliveryInfoCheck = {
  recipient: boolean
  address: boolean
  phone: boolean
}

export type CheckoutPayment = {
  value: string
  label: string
}

export type CheckoutClauseCheck = {}

type InitialCheckoutState = {
  deliveryInfo: CheckoutDeliveryInfoCheck
  clause: CheckoutClauseCheck
  payment: CheckoutPayment
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
  clause: {},
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
    selectPayment(
      state,
      action: PayloadAction<{ value: Payment; label: string }>
    ) {
      state.payment.label = action.payload.label
      state.payment.value = action.payload.value
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
  selectPayment,
} = checkoutSlice.actions

export const selectCheckoutDeliveyInfoCheckState = (state: RootState) =>
  state.checkout.deliveryInfo

export const selectCheckoutPaymentState = (state: RootState) =>
  state.checkout.payment

export default checkoutSlice.reducer
