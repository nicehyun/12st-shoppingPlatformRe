export type RateCoupon = {
  type: string
  title: string
  discountRate: number
}

export type AmountCoupon = {
  type: string
  title: string
  discountAmount: number
}

export type Coupon = {
  amount: AmountCoupon
  rate: RateCoupon
}
