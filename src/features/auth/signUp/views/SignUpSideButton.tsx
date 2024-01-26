import LoadingButton from "@/features/common/views/LoadingButton"
import { ReactNode } from "react"

interface ISignUpSideButton {
  content: string | ReactNode
  onClick?: () => void
  isDisabled?: boolean
  isLoading: boolean
}

const SignUpSideButton = ({
  content,
  onClick,
  isDisabled,
  isLoading,
}: ISignUpSideButton) => {
  return (
    <LoadingButton
      content={content}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
      className="ml-[10px] w-[110px] md:w-[80px] h-[38px] rounded-[5px] border-[1px] tracking-[1.5px] text-[12px] dark:bg-lightRed border-lightRed dark:text-white cursor-pointer disabled:dark:bg-lightGray disabled:text-lightGray  disabled:dark:text-white disabled:border-border disabled:cursor-not-allowed text-lightRed"
    />
  )
}

export default SignUpSideButton
