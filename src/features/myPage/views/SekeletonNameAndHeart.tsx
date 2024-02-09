import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import { BsFillSuitHeartFill } from "react-icons/bs"

const SekeletonNameAndHeart = () => {
  return (
    <div className="flex sm:items-center md:items-center justify-between h-[120px] w-full sm:px-[20px] md:px-[20px] sm:border-b-[1px] md:border-b-[1px] sm:border-border md:border-border dark:bg-white sm:bg-black md:bg-black lg:dark:bg-black xl:dark:bg-black">
      <SpanSkeletonUI className="h-[40px] xl:flex-1 lg:flex-1 w-[120px] mr-[10px]" />

      <div className="bg-black dark:bg-white sm:bg-white md:bg-white dark:sm:bg-black dark:md:bg-black rounded-full w-[40px] h-[40px] flexCenter">
        <span className="text-lightRed">
          <BsFillSuitHeartFill />
        </span>
      </div>
    </div>
  )
}

export default SekeletonNameAndHeart
