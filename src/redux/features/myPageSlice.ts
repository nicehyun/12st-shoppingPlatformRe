import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import {
  CheckoutDate,
  CheckoutPaymentInfo,
} from "@/features/checkout/types/checkout"
import { ProductInCart } from "@/features/cart/types/cart"
import { CsType } from "@/features/myPage/types/myPage"

export type SelectedCheckoutInfo = {
  checkoutNumber: string | null
  checkoutDate: CheckoutDate | null
  product: ProductInCart | null
  payment: CheckoutPaymentInfo | null
}

type SelectedCStype = CsType | null

type InitialMyPageState = {
  selectedCheckoutInfo: SelectedCheckoutInfo
  csType: SelectedCStype
}

const initialMyPageState: InitialMyPageState = {
  selectedCheckoutInfo: {
    checkoutNumber: null,
    checkoutDate: null,
    product: null,
    payment: null,
  },
  csType: null,
}

const myPageSlice = createSlice({
  name: "myPage",
  initialState: initialMyPageState,
  reducers: {
    selectCheckoutInfo(state, action: PayloadAction<SelectedCheckoutInfo>) {
      state.selectedCheckoutInfo.checkoutNumber = action.payload.checkoutNumber
      state.selectedCheckoutInfo.checkoutDate = action.payload.checkoutDate
      state.selectedCheckoutInfo.product = action.payload.product
      state.selectedCheckoutInfo.payment = action.payload.payment
    },
    resetCheckoutInfo(state) {
      state.selectedCheckoutInfo.checkoutNumber = null
      state.selectedCheckoutInfo.checkoutDate = null
      state.selectedCheckoutInfo.product = null
      state.selectedCheckoutInfo.payment = null
    },
    selectCsType(state, action: PayloadAction<CsType>) {
      state.csType = action.payload
    },
    resetCsType(state) {
      state.csType = null
    },
  },
})

export const {
  selectCheckoutInfo,
  resetCheckoutInfo,
  selectCsType,
  resetCsType,
} = myPageSlice.actions

export const selectSelectedCheckoutInfo = (state: RootState) =>
  state.myPage.selectedCheckoutInfo

export const selectSelectedCsType = (state: RootState) => state.myPage.csType

export default myPageSlice.reducer
