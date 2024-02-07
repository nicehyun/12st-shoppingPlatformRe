import { couponAPI } from "@/features/common/models/couponAPI"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const useCouponQuery = () => {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery(["coupon"], couponAPI.getCoupon, {
    onError: () => {
      queryClient.setQueryData(["coupon"], [])
    },
    staleTime: 1000 * 60 * 60,
  })

  const coupons = data ?? []

  return { coupons, isLoading }
}
