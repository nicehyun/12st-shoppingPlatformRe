import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../../hooks/useSignUpUserInput"
import { passwordValidator } from "../../utils/validation"
import SignUpFeedback from "../SignUpFeedback"
import SignUpInput from "../SignUpInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPasswordInput = () => {
  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    isValid: isPasswordValid,
    hasError: hasErrorPassword,
    reset: passwordInputReset,
  } = useSignUpUserInput(passwordValidator)

  const {
    value: rePasswordInputValue,
    handleValueChange: handleRePasswordInputValueChange,
    handleInputBlur: handleRePasswordInputBlur,
    isValid: isRePasswordValid,
    hasError: hasErrorRePassword,
    reset: rePasswordInputReset,
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
          classNames="ml-[0px]"
          content="영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
        />
      )}

      <SignUpInput
        type="repassword"
        classNames="mt-[10px]"
        inputValue={rePasswordInputValue}
        onChangeInputValue={handleRePasswordInputValueChange}
        onBlurInput={handleRePasswordInputBlur}
        isShowFeedback={hasErrorRePassword}
      />
      {hasErrorRePassword && (
        <SignUpFeedback
          classNames="ml-[0px]"
          content="비밀번호가 일치하지 않습니다."
        />
      )}
    </MSignUpInputLayout>
  )
}

export default MSignUpPasswordInput
