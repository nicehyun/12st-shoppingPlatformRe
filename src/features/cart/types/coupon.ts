export type RateCoupon = {
  type: string
  name: string
  discountRate: number
}

export type AmountCoupon = {
  type: string
  name: string
  discountAmount: number
}

export type GetCouponResponse = RateCoupon | (AmountCoupon & { id: number })[]
