import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../types/store"

type InitialCouponState = {
  seletedCoupon: RateCoupon | AmountCoupon | null
}

const initialCouponState: InitialCouponState = {
  seletedCoupon: null,
}

const couponSlice = createSlice({
  name: "coupon",
  initialState: initialCouponState,
  reducers: {
    resetCoupon(state) {
      state.seletedCoupon = null
    },
    selectCoupon(state, actions: PayloadAction<RateCoupon | AmountCoupon>) {
      state.seletedCoupon = actions.payload
    },
  },
})

export const { resetCoupon, selectCoupon } = couponSlice.actions

export const selectSelectedCoupon = (state: RootState) =>
  state.coupon.seletedCoupon

export default couponSlice.reducer
