import MyPageRewardsEl from "./MyPageRewardsEl"

const MyPageRewards = () => {
  const rewardList = [
    {
      id: "reward-coupon",
      rewardTitle: "쿠폰",
      showRewardNumber: 2,
      // onClickDetail?: () => void
    },
    {
      id: "reward-mile",
      rewardTitle: "마일리지",
      showRewardNumber: 0,
      // onClickDetail?: () => void
    },
  ]
  return (
    <section className="h-[180px] sm:h-[140px] md:h-[150px] bg-black dark:bg-white p-[20px] flexCenter">
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
