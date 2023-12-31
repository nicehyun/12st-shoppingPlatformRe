import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"

export const couponAPI = {
  getCoupon: async (): Promise<(RateCoupon | AmountCoupon)[]> => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/coupons`, {
      next: { revalidate: 0 },
    })

    const coupons = await response.json()

    return coupons
  },
}
