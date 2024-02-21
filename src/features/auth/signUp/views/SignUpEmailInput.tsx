"use client"

import { ChangeEvent, useEffect } from "react"
import { useUserInput } from "../../../common/hooks/useUserInput"
import { emailValidator } from "../models/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { useEmailDuplicationCheckMutation } from "../hooks/useEmailDuplicationCheckMutaion"
import { useAppSelector } from "@/redux/hooks"
import { selectSignUpStepState } from "@/redux/features/signUpSlice"
import SignUpStepLayout from "./SignUpStepLayout"
import { useQueryClient } from "@tanstack/react-query"

const SignUpEmailInput = () => {
  const signUpStep = useAppSelector(selectSignUpStepState)

  const queryClient = useQueryClient()
  const isEmailDuplicationCheck = (queryClient.getQueryData([
    "SignUpValidation",
    "emailDuplicationCheck",
  ]) ?? false) as boolean

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset,
  } = useUserInput(emailValidator)

  const { mutateAsync, isLoading, resetEmailDuplicationCheck } =
    useEmailDuplicationCheckMutation(emailInputValue)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    resetEmailDuplicationCheck()
    handleEmailInputValueChange(event)
  }

  const handleEmailDuplicationCheck = async () => {
    if (isLoading) return

    await mutateAsync()
  }

  useEffect(() => {
    if (signUpStep === 0) {
      reset()
      resetEmailDuplicationCheck()
      return
    }
  }, [signUpStep])

  return (
    <SignUpStepLayout
      isButtonDisabled={!isEmailValid || !isEmailDuplicationCheck}
    >
      <SignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
        <SignUpVerificationInput
          placeholder="example@example.com"
          id="signUp-email"
          buttonContent={isEmailDuplicationCheck ? "확인완료" : "중복확인"}
          isDisabledButton={isEmailDuplicationCheck}
          inputValue={emailInputValue}
          onBlurInput={handleEmailInputBlur}
          onChangeInputValue={handleEmailInputChange}
          onClickVerificationButton={handleEmailDuplicationCheck}
          isShowFeedback={hasErrorEmail}
          isLoading={isLoading}
        />

        <SignUpFeedback
          isValid={isEmailValid}
          content="example@example.com 형식의 이메일"
        />
        <SignUpFeedback
          isValid={isEmailDuplicationCheck}
          content="이메일 중복 검사"
        />
      </SignUpInputLayout>
    </SignUpStepLayout>
  )
}

export default SignUpEmailInput
