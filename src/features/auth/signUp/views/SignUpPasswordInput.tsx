"use client"

import { validatePassword } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../hooks/useSignUpUserInput"
import { Mobile } from "../types/mobile"
import { passwordValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpInput from "./SignUpInput"

// TODO : isPasswordValid 글로벌로 변경하기
const SignUpPasswordInput = ({ isMobile }: Mobile) => {
  const dispatch = useAppDispatch()

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
  } = useSignUpUserInput(passwordValidator)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    hasError: hasErrorRepassword,
    isValid: isRepasswordValid,
  } = useSignUpUserInputWithRePassword(passwordInputValue)

  useEffect(() => {
    if (isPasswordValid && isRepasswordValid) {
      dispatch(validatePassword())
      return
    }
  }, [isPasswordValid, isRepasswordValid, dispatch])

  return (
    <>
      <SignUpInput
        type="password"
        inputValue={passwordInputValue}
        onChangeInputValue={handlePasswordInputValueChange}
        onBlurInput={handlePasswordInputBlur}
        isShowFeedback={hasErrorPassword}
        isMobile={isMobile}
      />

      {hasErrorPassword && (
        <SignUpFeedback
          classNames="ml-[-0px]"
          content="영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
        />
      )}

      <SignUpInput
        type="repassword"
        classNames="mt-[10px]"
        inputValue={repasswordInputValue}
        onChangeInputValue={handleRepasswordInputValueChange}
        onBlurInput={handleRepasswordInputBlur}
        isShowFeedback={hasErrorRepassword}
        isMobile={isMobile}
      />
      {hasErrorRepassword && (
        <SignUpFeedback
          classNames="ml-[-0px]"
          content="비밀번호가 일치하지 않습니다."
        />
      )}
    </>
  )
}

export default SignUpPasswordInput
