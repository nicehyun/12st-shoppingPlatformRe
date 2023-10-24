"use client"
import useCouponQuery from "@/features/checkout/hooks/useCouponQuery"
import { useUserMileQuery } from "@/features/checkout/hooks/useGetUserMileQuery"
import MyPageRewardsEl from "./MyPageRewardsEl"

//TODO : 쿠폰 클릭
const MyPageRewards = () => {
  const { coupons } = useCouponQuery()
  const { userMile } = useUserMileQuery()

  const rewardList = [
    {
      id: "reward-coupon",
      rewardTitle: "쿠폰",
      showRewardNumber: coupons?.length ?? 0,
      // onClickDetail?: () => void
    },
    {
      id: "reward-mile",
      rewardTitle: "마일리지",
      showRewardNumber: userMile ?? 0,
      // onClickDetail?: () => void
    },
  ]
  return (
    <section className="lg:h-[180px] xl:h-[180px] sm:border-b-[1px] md:border-b-[1px] sm:border-border md:border-border bg-black dark:bg-white flexCenter">
      {rewardList.map((rewardEl, index) => (
        <MyPageRewardsEl
          key={rewardEl.id}
          rewardTitle={rewardEl.rewardTitle}
          showRewardNumber={rewardEl.showRewardNumber}
          className={index === 0 ? "border-r-[1px] border-border" : ""}
        />
      ))}
    </section>
  )
}

export default MyPageRewards
