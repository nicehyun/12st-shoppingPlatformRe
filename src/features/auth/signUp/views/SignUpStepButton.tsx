import Button from "@/features/common/views/Button"

interface ISignUpStepButton {
  onClickNextButton: () => void
  type?: "button" | "submit"
  isDisabled: boolean
  content: string
}

const SignUpStepButton = ({
  onClickNextButton,
  type = "button",
  isDisabled,
  content,
}: ISignUpStepButton) => {
  return (
    <Button
      type={type}
      onClick={onClickNextButton}
      classNames="mt-[50px] rounded-[5px] px-[16px] h-[50px] text-lightRed bg-white border-[1px] border-lightRed text-[14px] md:text-[12px] sm:text-[10px] hover:bg-lightRed hover:text-white disabled:bg-border dark:disabled:bg-border disabled:cursor-not-allowed disabled:border-border disabled:text-lightBlack dark:bg-lightRed dark:text-white tracking-[3px]"
      isDisabled={isDisabled}
      content={content}
    />
  )
}

export default SignUpStepButton
