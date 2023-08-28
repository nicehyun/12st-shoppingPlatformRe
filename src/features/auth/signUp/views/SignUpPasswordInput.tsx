"use client"

import {
  resetPasswordValid,
  selectSignUpActiveStepState,
  validatePassword,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../hooks/useSignUpUserInput"
import { passwordValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpInput from "./SignUpInput"
import SignUpInputLayout from "./SignUpInputLayout"

const SignUpPasswordInput = () => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
    reset: resetPassword,
  } = useSignUpUserInput(passwordValidator)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    hasError: hasErrorRepassword,
    isValid: isRepasswordValid,
    reset: resetRepassword,
  } = useSignUpUserInputWithRePassword(passwordInputValue)

  useEffect(() => {
    dispatch(resetPasswordValid())

    if (isPasswordValid && isRepasswordValid) {
      dispatch(validatePassword())
      return
    }
  }, [isPasswordValid, isRepasswordValid, dispatch])

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      resetPassword()
      resetRepassword()
      return
    }
  }, [selectSignUpActiveStep])

  return (
    <SignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpInput
        type="password"
        inputValue={passwordInputValue}
        onChangeInputValue={handlePasswordInputValueChange}
        onBlurInput={handlePasswordInputBlur}
        isShowFeedback={hasErrorPassword}
      />

      {hasErrorPassword && (
        <SignUpFeedback content="영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요." />
      )}

      <SignUpInput
        type="repassword"
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
