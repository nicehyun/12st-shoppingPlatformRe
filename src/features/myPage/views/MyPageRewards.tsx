"use client"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import useCouponQuery from "@/features/checkout/hooks/useCouponQuery"
import { useUserMileQuery } from "@/features/checkout/hooks/useGetUserMileQuery"
import MyPageRewardsEl from "./MyPageRewardsEl"

const MyPageRewards = () => {
  const { coupons, isLoading: isCouponsLoading } = useCouponQuery()
  const { userMile, isLoading: isUserMileLoading } = useUserMileQuery()
  const { routeTo } = useNavigations()

  const rewardList = [
    {
      id: "reward-coupon",
      rewardTitle: "쿠폰",
      showRewardNumber: coupons?.length ?? 0,
      onClickDetail: () => routeTo(ROUTE.COUPONS),
      isLoading: isCouponsLoading,
    },
    {
      id: "reward-mile",
      rewardTitle: "마일리지",
      showRewardNumber: userMile ?? 0,
      onClickDetail: () => routeTo(ROUTE.Mile),
      isLoading: isUserMileLoading,
    },
  ]
  return (
    <section className="lg:h-[180px] xl:h-[180px] sm:border-b-[1px] md:border-b-[1px] sm:border-border md:border-border bg-black dark:bg-white flexCenter mb-[60px]">
      {rewardList.map((rewardEl, index) => (
        <MyPageRewardsEl
          key={rewardEl.id}
          onClickDetail={rewardEl.onClickDetail}
          rewardTitle={rewardEl.rewardTitle}
          showRewardNumber={rewardEl.showRewardNumber}
          isLoading={rewardEl.isLoading}
          className={index === 0 ? "border-r-[1px] border-border" : ""}
        />
      ))}
    </section>
  )
}

export default MyPageRewards
