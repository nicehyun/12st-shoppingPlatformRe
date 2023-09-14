import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

export type CheckoutDeliveryInfoCheck = {
  recipient: boolean
  address: boolean
  phone: boolean
}

export type CheckoutClauseCheck = {}

type InitialCheckoutState = {
  deliveryInfo: CheckoutDeliveryInfoCheck
  clause: CheckoutClauseCheck
}

const initialCartState: InitialCheckoutState = {
  deliveryInfo: {
    recipient: false,
    address: false,
    phone: false,
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
} = checkoutSlice.actions

export const selectCheckoutDeliveyInfoCheckState = (state: RootState) =>
  state.checkout.deliveryInfo

export default checkoutSlice.reducer
