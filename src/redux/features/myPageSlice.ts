import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"
import {
  CheckoutDate,
  CheckoutList,
  CheckoutPaymentInfo,
} from "@/common/types/checkout"
import { ProductInCart } from "@/features/cart/types/cart"

export type SelectedCheckoutInfo = {
  checkoutNumber: string | null
  checkoutDate: CheckoutDate | null
  product: ProductInCart | null
  payment: CheckoutPaymentInfo | null
}

type InitialMyPageState = {
  selectedCheckoutInfo: SelectedCheckoutInfo
}

const initialMyPageState: InitialMyPageState = {
  selectedCheckoutInfo: {
    checkoutNumber: null,
    checkoutDate: null,
    product: null,
    payment: null,
  },
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
  },
})

export const { selectCheckoutInfo } = myPageSlice.actions

export const selectSelectedCheckoutInfo = (state: RootState) =>
  state.myPage.selectedCheckoutInfo

export default myPageSlice.reducer
