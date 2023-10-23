import { AiOutlineRight } from "react-icons/ai"

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
      className={`${className} px-[20px] sm:px-[10px] md:px-[10px] w-1/2 h-full flex flex-col justify-between cursor-pointer`}
    >
      <span className="text-border dark:text-lightBlack text-[18px] sm:text-[14px] md:text-[14px] flex items-center">
        {rewardTitle} <AiOutlineRight />
      </span>

      <span className="text-[30px] sm:text-[20px] md:text-[24px] text-white dark:text-black">
        {showRewardNumber}
      </span>
    </div>
  )
}

export default MyPageRewardsEl
