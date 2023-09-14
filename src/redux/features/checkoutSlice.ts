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
      state.deliveryInfo.address = true
    },
    uncheckToPhone(state) {
      state.deliveryInfo.address = false
    },
    checkToRecipient(state) {
      state.deliveryInfo.address = true
    },
    uncheckToRecipient(state) {
      state.deliveryInfo.address = false
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

export default checkoutSlice.reducer
