import Button from "@/features/common/views/Button"
import { ReactNode } from "react"

interface ISignUpSideButton {
  classNames?: string
  content: string | ReactNode
  onClick?: () => void
  isDisabled?: boolean
}

const SignUpSideButton = ({
  classNames,
  content,
  onClick,
  isDisabled,
}: ISignUpSideButton) => {
  return (
    <Button
      onClick={onClick}
      isDisabled={isDisabled}
      classNames={`${classNames} w-[110px] md:w-[80px] h-[38px] rounded-[5px] border-[1px] tracking-[1.5px] text-[12px] dark:bg-lightRed border-lightRed dark:text-white cursor-pointer disabled:dark:bg-lightGray disabled:text-lightGray  disabled:dark:text-white disabled:border-border disabled:cursor-not-allowed text-lightRed`}
      content={content}
    />
  )
}

export default SignUpSideButton
