import { ChangeEvent } from "react"
import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

export interface IMSignUpEmailInput {
  emailInputValue: string
  isEmailValid: boolean
  isCheckedEmail: boolean
  isEmailDuplicateCheckLoading: boolean
  onChangeEmailInputValue: (event: ChangeEvent<HTMLInputElement>) => void
  onBlurEmailInput: () => void
  hasErrorEmail: boolean
  onCheckEmailDuplicate: () => void
}

const MSignUpEmailInput = ({
  emailInputValue,
  hasErrorEmail,
  isCheckedEmail,
  isEmailDuplicateCheckLoading,
  isEmailValid,
  onBlurEmailInput,
  onChangeEmailInputValue,
  onCheckEmailDuplicate,
}: IMSignUpEmailInput) => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpVerificationInput
        isDisabledButton={
          !isEmailValid || isCheckedEmail || isEmailDuplicateCheckLoading
        }
        type="email"
        inputValue={emailInputValue}
        onBlurInput={onBlurEmailInput}
        onChangeInputValue={onChangeEmailInputValue}
        onClickVerificationButton={onCheckEmailDuplicate}
        isShowFeedback={hasErrorEmail}
        isLoading={isEmailDuplicateCheckLoading}
      />
      {hasErrorEmail && (
        <SignUpFeedback
          classNames="ml-[0px]"
          content="이메일 형식을 입력해주세요."
        />
      )}
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
