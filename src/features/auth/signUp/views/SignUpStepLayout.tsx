import { ReactNode } from "react"
import SignUpStepButton from "./SignUpStepButton"
import { useAppDispatch } from "@/redux/hooks"
import { nextStep } from "@/redux/features/signUpSlice"
import LoadingButton from "@/features/common/views/LoadingButton"

interface ISignUpStepLayout {
  children: ReactNode
  buttonContent?: string
  isButtonDisabled: boolean
  buttonType?: "button" | "submit"
  isLoading?: boolean
}

const SignUpStepLayout = ({
  children,
  buttonContent = "다음",
  isButtonDisabled,
  buttonType = "button",
  isLoading = false,
}: ISignUpStepLayout) => {
  const dispatch = useAppDispatch()

  const handleNextButtonClick = () => {
    dispatch(nextStep())
  }

  return (
    <div className="flex flex-col">
      {children}

      {buttonType === "submit" ? (
        <LoadingButton
          type="submit"
          content={buttonContent}
          isLoading={isLoading}
          className="mt-[50px] rounded-[5px] px-[16px] h-[50px] text-lightRed bg-white border-[1px] border-lightRed text-[14px] md:text-[12px] sm:text-[10px] hover:bg-lightRed hover:text-white disabled:bg-border dark:disabled:bg-border disabled:cursor-not-allowed disabled:border-border disabled:text-lightBlack dark:bg-lightRed dark:text-white tracking-[3px]"
        />
      ) : (
        <SignUpStepButton
          onClickNextButton={handleNextButtonClick}
          isDisabled={isButtonDisabled}
          content={buttonContent}
          type={buttonType}
        />
      )}
    </div>
  )
}

export default SignUpStepLayout
