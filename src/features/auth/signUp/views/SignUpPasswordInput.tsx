"use client"

import { useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import {
  useUserInput,
  useUserInputWithRePassword,
} from "../../../common/hooks/useUserInput"
import {
  passwordLengthValidator,
  passwordValidator,
  specialCharacterValidator,
} from "../models/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInput from "./SignUpInput"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpStepLayout from "./SignUpStepLayout"
import { selectSignUpStepState } from "@/redux/features/signUpSlice"

const SignUpPasswordInput = () => {
  const signUpStep = useAppSelector(selectSignUpStepState)

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
    reset: resetPassword,
  } = useUserInput(passwordValidator)

  const isSpecialCharacterValid = specialCharacterValidator(passwordInputValue)
  const isPasswordLengthValid = passwordLengthValidator(passwordInputValue)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    hasError: hasErrorRepassword,
    isValid: isRepasswordValid,
    reset: resetRepassword,
  } = useUserInputWithRePassword(passwordInputValue)

  useEffect(() => {
    if (signUpStep === 0) {
      resetPassword()
      resetRepassword()
      return
    }
  }, [signUpStep])

  return (
    <SignUpStepLayout isButtonDisabled={!isPasswordValid || !isRepasswordValid}>
      <SignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
        <SignUpInput
          id="signUp-password"
          inputValue={passwordInputValue}
          onChangeInputValue={handlePasswordInputValueChange}
          onBlurInput={handlePasswordInputBlur}
          isShowFeedback={hasErrorPassword}
        />

        <SignUpInput
          id="signUp-repassword"
          classNames="mt-[10px]"
          inputValue={repasswordInputValue}
          onChangeInputValue={handleRepasswordInputValueChange}
          onBlurInput={handleRepasswordInputBlur}
          isShowFeedback={hasErrorRepassword}
        />

        <SignUpFeedback
          isValid={isSpecialCharacterValid}
          content="영문, 숫자, 공백을 제외한 특수문자 사용"
        />
        <SignUpFeedback isValid={isPasswordLengthValid} content="8~20자리" />
        <SignUpFeedback isValid={isRepasswordValid} content="비밀번호 일치" />
      </SignUpInputLayout>
    </SignUpStepLayout>
  )
}

export default SignUpPasswordInput
