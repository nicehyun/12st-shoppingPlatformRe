import { ChangeEvent } from "react"
import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../../hooks/useSignUpUserInput"
import { passwordValidator } from "../../utils/validation"

import SignUpFeedback from "../SignUpFeedback"
import SignUpInput from "../SignUpInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

// TODO : isPasswordValid 글로벌로 변경하기
const MSignUpPasswordInput = () => {
  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
  } = useSignUpUserInput(passwordValidator)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    hasError: hasErrorRepassword,
  } = useSignUpUserInputWithRePassword(passwordInputValue)

  return (
    <MSignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpInput
        type="password"
        inputValue={passwordInputValue}
        onChangeInputValue={handlePasswordInputValueChange}
        onBlurInput={handlePasswordInputBlur}
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
        onChangeInputValue={handleRepasswordInputValueChange}
        onBlurInput={handleRepasswordInputBlur}
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
