import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"

export const couponAPI = {
  getCoupon: async (): Promise<(RateCoupon | AmountCoupon)[]> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupons`,
        {
          next: { revalidate: 0 },
        }
      )

      const coupons = await response.json()

      return coupons
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
