import { couponAPI } from "@/features/common/models/couponAPI"
import { useQuery } from "@tanstack/react-query"

const useCouponQuery = () => {
  const { data: coupons, isLoading } = useQuery(["coupon"], couponAPI.getCoupon)

  return { coupons, isLoading }
}

export default useCouponQuery
