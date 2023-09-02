import { getCoupon } from "@/firebase/firestore/coupon"
import { useQuery } from "@tanstack/react-query"

export const QUERY_KEY = "coupon"

const useCouponQuery = () => {
  const { data: coupons } = useQuery(["coupon"], getCoupon)

  return { coupons }
}

export default useCouponQuery
