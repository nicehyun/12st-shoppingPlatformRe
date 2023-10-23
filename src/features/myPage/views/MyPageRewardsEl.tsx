interface IMyPageRewardsLi {
  rewardTitle: string
  showRewardNumber: number
  onClickDetail?: () => void
  className?: string
}

const MyPageRewardsEl = ({
  rewardTitle,
  showRewardNumber,
  className,
}: IMyPageRewardsLi) => {
  return (
    <div
      className={`${className} px-[20px] w-1/2 h-full flex flex-col justify-between`}
    >
      <span className="text-border dark:text-lightBlack text-[18px]">
        {rewardTitle}
      </span>

      <span className="text-[30px] text-white dark:text-black">
        {showRewardNumber}
      </span>
    </div>
  )
}

export default MyPageRewardsEl
