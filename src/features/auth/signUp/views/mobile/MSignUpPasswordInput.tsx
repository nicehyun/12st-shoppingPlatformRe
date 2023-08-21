import { ChangeEvent } from "react"

import SignUpFeedback from "../SignUpFeedback"
import SignUpInput from "../SignUpInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

export interface IMSignUpPasswordInput {
  password: {
    inputValue: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    onBlurInput: () => void
    hasError: boolean
  }

  repassword: {
    inputValue: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    onBlurInput: () => void
    hasError: boolean
  }
}

const MSignUpPasswordInput = ({
  password,
  repassword,
}: IMSignUpPasswordInput) => {
  const {
    inputValue: passwordInputValue,
    onChangeInputValue: onChangePasswordInputValue,
    onBlurInput: onBlurPasswordInput,
    hasError: hasErrorPassword,
  } = password
  const {
    inputValue: repasswordInputValue,
    onChangeInputValue: onChangeRepasswordInputValue,
    onBlurInput: onBlurRepasswordInput,
    hasError: hasErrorRepassword,
  } = repassword

  return (
    <MSignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpInput
        type="password"
        inputValue={passwordInputValue}
        onChangeInputValue={onChangePasswordInputValue}
        onBlurInput={onBlurPasswordInput}
        isShowFeedback={hasErrorPassword}
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
        onChangeInputValue={onChangeRepasswordInputValue}
        onBlurInput={onBlurRepasswordInput}
        isShowFeedback={hasErrorRepassword}
      />
      {hasErrorRepassword && (
        <SignUpFeedback
          classNames="ml-[-0px]"
          content="비밀번호가 일치하지 않습니다."
        />
      )}
    </MSignUpInputLayout>
  )
}

export default MSignUpPasswordInput
