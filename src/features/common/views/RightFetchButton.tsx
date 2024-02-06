import LoadingButton from "@/features/common/views/LoadingButton"
import { ReactNode } from "react"

interface IRightFetchButton {
  content: string | ReactNode
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

const RightFetchButton = ({
  content,
  onClick,
  isDisabled,
  isLoading = false,
}: IRightFetchButton) => {
  return (
    <LoadingButton
      content={content}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
      className="ml-[10px] w-[110px] md:w-[80px] h-[50px] sm:h-[40px] md:h-[44px] rounded-[5px] border-[1px] tracking-[1.5px] text-[12px] dark:bg-lightRed border-lightRed dark:text-white cursor-pointer disabled:dark:bg-lightGray disabled:text-lightGray  disabled:dark:text-white disabled:border-border disabled:cursor-not-allowed text-lightRed"
    />
  )
}

export default RightFetchButton
