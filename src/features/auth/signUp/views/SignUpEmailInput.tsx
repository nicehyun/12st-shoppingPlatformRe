"use client"

import { ChangeEvent, useEffect } from "react"

import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"
import { useUserInput } from "../../../common/hooks/useUserInput"
import { emailValidator } from "../utils/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { useEmailDuplicationCheckMutation } from "../hooks/useEmailDuplicationCheckMutaion"

export interface ISignUpEmailInput {
  activeStep: number
  isVerificationChecked: boolean
  checkEmailDuplication: () => void
  resetEmailDuplicateCheck: () => void
}

const SignUpEmailInput = ({
  resetEmailDuplicateCheck,
  checkEmailDuplication,
  isVerificationChecked,
  activeStep,
}: ISignUpEmailInput) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset,
  } = useUserInput(emailValidator)

  const {
    isLoading: isEmailDuplicateCheckLoading,
    mutateAsync: emailDuplicateCheckMutateAsync,
  } = useEmailDuplicationCheckMutation()

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    resetEmailDuplicateCheck()
    handleEmailInputValueChange(event)
  }

  const handleEmailDuplicationCheck = async () => {
    const isExistedEmail = await emailDuplicateCheckMutateAsync(emailInputValue)

    if (isExistedEmail.isExistedEmail) {
      showFeedbackModalWithContent("사용할 수 없는 이메일입니다.")
      return
    }

    checkEmailDuplication()
    showFeedbackModalWithContent("시용 가능한 이메일입니다.")
  }

  useEffect(() => {
    if (activeStep === 0) {
      reset()
      return
    }
  }, [activeStep])

  return (
    <SignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpVerificationInput
        placeholder="example@example.com"
        id="signUp-email"
        buttonContent={isVerificationChecked ? "확인완료" : "중복확인"}
        isChecked={isVerificationChecked}
        isDisabledButton={
          !isEmailValid || isVerificationChecked || isEmailDuplicateCheckLoading
        }
        inputValue={emailInputValue}
        onBlurInput={handleEmailInputBlur}
        onChangeInputValue={handleEmailInputChange}
        onClickVerificationButton={handleEmailDuplicationCheck}
        isShowFeedback={hasErrorEmail}
        isLoading={isEmailDuplicateCheckLoading}
      />
      {hasErrorEmail && (
        <SignUpFeedback content="이메일 형식을 입력해주세요." />
      )}
    </SignUpInputLayout>
  )
}

export default SignUpEmailInput
