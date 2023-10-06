import { getCoupon } from "@/firebase/firestore/coupon"
import { useQuery } from "@tanstack/react-query"

const useCouponQuery = () => {
  const { data: coupons } = useQuery(["coupon"], getCoupon)

  return { coupons }
}

export default useCouponQuery
