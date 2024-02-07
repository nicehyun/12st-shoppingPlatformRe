import { Payment } from "@/features/checkout/views/payment/PaymentButton"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import { checkToAllAgreeClauseByCheckout } from "../utils/clause"
import { ProductsInCart } from "@/features/cart/types/cart"

export type CheckoutPayment = {
  value: string
  label: string
}

type InitialCheckoutState = {
  payment: CheckoutPayment
  plannedUseMile: number
  checkoutPendingProductList: ProductsInCart
  deliveryTabValue: number
}

const initialCartState: InitialCheckoutState = {
  payment: {
    value: "credit",
    label: "신용/체크카드",
  },
  plannedUseMile: 0,
  checkoutPendingProductList: [],
  deliveryTabValue: 1,
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialCartState,
  reducers: {
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
    addCheckoutPendingProductList(
      state,
      actions: PayloadAction<ProductsInCart>
    ) {
      state.checkoutPendingProductList = actions.payload
    },
    emptyCheckoutPendingProductList(state) {
      state.checkoutPendingProductList = []
    },
    deliveryTabValueChange(state, actions: PayloadAction<number>) {
      state.deliveryTabValue = actions.payload
    },
  },
})

export const {
  resetSelectPayment,
  selectPayment,
  resetPlannedUseMile,
  setPlannedUseMile,
  addCheckoutPendingProductList,
  emptyCheckoutPendingProductList,
  deliveryTabValueChange,
} = checkoutSlice.actions

export const selectCheckoutPaymentState = (state: RootState) =>
  state.checkout.payment

export const selectCheckoutPlannedUseMileState = (state: RootState) =>
  state.checkout.plannedUseMile

export const selectCheckoutPendingProductListState = (state: RootState) =>
  state.checkout.checkoutPendingProductList

export const selectDeliveryTabValueState = (state: RootState) =>
  state.checkout.deliveryTabValue

export default checkoutSlice.reducer
