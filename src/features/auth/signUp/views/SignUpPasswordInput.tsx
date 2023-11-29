"use client"

import {
  resetPasswordValid,
  validatePassword,
} from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import {
  useUserInput,
  useUserInputWithRePassword,
} from "../../../common/hooks/useUserInput"
import { passwordValidator } from "../utils/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInput from "./SignUpInput"
import SignUpInputLayout from "./SignUpInputLayout"

interface ISignUpPasswordInput {
  activeStep: number
}

const SignUpPasswordInput = ({ activeStep }: ISignUpPasswordInput) => {
  const dispatch = useAppDispatch()

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
    reset: resetPassword,
  } = useUserInput(passwordValidator)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    hasError: hasErrorRepassword,
    isValid: isRepasswordValid,
    reset: resetRepassword,
  } = useUserInputWithRePassword(passwordInputValue)

  useEffect(() => {
    dispatch(resetPasswordValid())

    if (isPasswordValid && isRepasswordValid) {
      dispatch(validatePassword())
      return
    }
  }, [isPasswordValid, isRepasswordValid, dispatch])

  useEffect(() => {
    if (activeStep === 0) {
      resetPassword()
      resetRepassword()
      return
    }
  }, [activeStep])

  return (
    <SignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpInput
        id="signUp-password"
        inputValue={passwordInputValue}
        onChangeInputValue={handlePasswordInputValueChange}
        onBlurInput={handlePasswordInputBlur}
        isShowFeedback={hasErrorPassword}
      />

      {hasErrorPassword && (
        <SignUpFeedback content="영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요." />
      )}

      <SignUpInput
        id="signUp-repassword"
        classNames="mt-[10px]"
        inputValue={repasswordInputValue}
        onChangeInputValue={handleRepasswordInputValueChange}
        onBlurInput={handleRepasswordInputBlur}
        isShowFeedback={hasErrorRepassword}
      />
      {hasErrorRepassword && (
        <SignUpFeedback content="비밀번호가 일치하지 않습니다." />
      )}
    </SignUpInputLayout>
  )
}

export default SignUpPasswordInput
