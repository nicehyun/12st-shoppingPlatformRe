"use client"

import { ChangeEvent, useEffect } from "react"
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
  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset,
  } = useUserInput(emailValidator)

  const handleEmailAvailableCb = () => {
    checkEmailDuplication()
  }

  const { emailDuplicationCheckMutateAsync, isLoading } =
    useEmailDuplicationCheckMutation(emailInputValue, handleEmailAvailableCb)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    resetEmailDuplicateCheck()
    handleEmailInputValueChange(event)
  }

  useEffect(() => {
    if (activeStep === 0) {
      reset()
      resetEmailDuplicateCheck()
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
        isDisabledButton={!isEmailValid || isVerificationChecked}
        inputValue={emailInputValue}
        onBlurInput={handleEmailInputBlur}
        onChangeInputValue={handleEmailInputChange}
        onClickVerificationButton={emailDuplicationCheckMutateAsync}
        isShowFeedback={hasErrorEmail}
        isLoading={isLoading}
      />

      <SignUpFeedback
        isValid={isEmailValid}
        content="example@example.com 형식의 이메일"
      />
      <SignUpFeedback
        isValid={isVerificationChecked}
        content="이메일 중복 검사"
      />
    </SignUpInputLayout>
  )
}

export default SignUpEmailInput
