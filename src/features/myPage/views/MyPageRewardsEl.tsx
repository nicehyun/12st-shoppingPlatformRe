import { numberToLocaleString } from "@/features/common/utils/price"
import Button from "@/features/common/views/Button"
import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import { AiOutlineRight } from "react-icons/ai"

interface IMyPageRewardsLi {
  rewardTitle: string
  showRewardNumber: number
  onClickDetail: () => void
  className?: string
  isLoading: boolean
}

const MyPageRewardsEl = ({
  rewardTitle,
  showRewardNumber,
  className,
  onClickDetail,
  isLoading,
}: IMyPageRewardsLi) => {
  return (
    <div
      className={`${className} p-[20px]  w-1/2 h-full flex flex-col justify-between`}
    >
      <Button
        onClick={onClickDetail}
        content={
          <>
            {rewardTitle} <AiOutlineRight />
          </>
        }
        classNames="text-border dark:text-lightBlack text-[18px] sm:text-[14px] md:text-[14px] flex items-center mb-[20px]"
      />

      {isLoading ? (
        <SpanSkeletonUI className="w-[80px] h-[36px]" />
      ) : (
        <span className="text-[30px] font-bold sm:text-[20px] md:text-[24px] text-white dark:text-black">
          {showRewardNumber ? numberToLocaleString(showRewardNumber) : 0}
        </span>
      )}
    </div>
  )
}

export default MyPageRewardsEl
