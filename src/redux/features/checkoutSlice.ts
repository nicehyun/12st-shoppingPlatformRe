import { Payment } from "@/features/checkout/views/PaymentButton"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import { checkToAllAgreeClauseByCheckout } from "../utils/clause"
import { ProductsInCart } from "@/features/cart/types/cart"

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
  clause: CheckoutClauseCheck
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
  clause: {
    all: false,
    collectionOfUserInfo: false,
    provisionOfUserInfo: false,
    paymentAgency: false,
  },
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
    resetClause(state) {
      state.clause.all = false
      state.clause.collectionOfUserInfo = false
      state.clause.paymentAgency = false
      state.clause.provisionOfUserInfo = false
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
  resetClause,
  toggleAgreeToAllClause,
  toggleCollectionOfUserInfoClause,
  togglePaymentAgencyClause,
  toggleprovisionOfUserInfoClause,
  addCheckoutPendingProductList,
  emptyCheckoutPendingProductList,
  deliveryTabValueChange,
} = checkoutSlice.actions

export const selectCheckoutClauseState = (state: RootState) =>
  state.checkout.clause

export const selectCheckoutPaymentState = (state: RootState) =>
  state.checkout.payment

export const selectCheckoutPlannedUseMileState = (state: RootState) =>
  state.checkout.plannedUseMile

export const selectCheckoutPendingProductListState = (state: RootState) =>
  state.checkout.checkoutPendingProductList

export const selectDeliveryTabValueState = (state: RootState) =>
  state.checkout.deliveryTabValue

export default checkoutSlice.reducer
