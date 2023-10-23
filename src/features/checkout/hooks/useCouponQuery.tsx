import { couponAPI } from "@/common/models/couponAPI"
import { useQuery } from "@tanstack/react-query"

const useCouponQuery = () => {
  const { data: coupons } = useQuery(["coupon"], couponAPI.getCoupon)

  return { coupons }
}

export default useCouponQuery
