"use client"

import {
  checkToEmailDuplication,
  resetEmailDuplication,
  selectSignUpCheckState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEvent } from "react"
import { useEmailDuplicationCheckMutaion } from "../hooks/useEmailDuplicationCheckMutaion"
import { useFeedbackModal } from "../hooks/useFeedbackModal"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { emailValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpVerificationInput from "./SignUpVerificationInput"

// TODO : isEmailValid 글로벌로 변경하기
const SignUpEmailInput = () => {
  const dispatch = useAppDispatch()
  const { email: isCheckedEmailDuplication } = useAppSelector(
    selectSignUpCheckState
  )

  const { showFeedbackModalWithContent } = useFeedbackModal()

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
  } = useSignUpUserInput(emailValidator)

  const {
    isLoading: isEmailDuplicateCheckLoading,
    mutateAsync: emailDuplicateCheckMutateAsync,
  } = useEmailDuplicationCheckMutaion(emailInputValue)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetEmailDuplication())

    handleEmailInputValueChange(event)
  }

  const handleEmailDuplicationCheck = async () => {
    const isExistedEmail = await emailDuplicateCheckMutateAsync()

    if (isExistedEmail) {
      showFeedbackModalWithContent("사용할 수 없는 이메일입니다.")
      return
    }

    dispatch(checkToEmailDuplication())
    showFeedbackModalWithContent("시용 가능한 이메일입니다.")
  }
  return (
    <>
      <SignUpVerificationInput
        isDisabledButton={
          !isEmailValid ||
          isCheckedEmailDuplication ||
          isEmailDuplicateCheckLoading
        }
        type="email"
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
    </>
  )
}

export default SignUpEmailInput
