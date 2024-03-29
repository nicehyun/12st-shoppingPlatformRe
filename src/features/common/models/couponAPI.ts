import { AmountCoupon, RateCoupon } from "@/features/common/types/coupon"

export const couponAPI = {
  getCoupon: async (): Promise<(RateCoupon | AmountCoupon)[]> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupons`,
        {
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
