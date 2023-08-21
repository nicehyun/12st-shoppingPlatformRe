import { resetEmailDuplication } from "@/redux/features/signUpSlice"
import { useAppDispatch } from "@/redux/hooks"
import { ChangeEvent } from "react"
import { useSignUpUserInput } from "../../hooks/useSignUpUserInput"
import { emailValidator } from "../../utils/validation"
import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpEmailInput = () => {
  const dispatch = useAppDispatch()

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    isValid: isEmailValid,
    hasError: hasErrorEmail,
    reset: emailInputReset,
  } = useSignUpUserInput(emailValidator)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetEmailDuplication())

    handleEmailInputValueChange(event)
    console.log(event.target.value)
  }

  const handleVerificationButtom = () => {}
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpVerificationInput
        isDisabledButton={true}
        type="email"
        inputValue={emailInputValue}
        onBlurInput={handleEmailInputBlur}
        onChangeInputValue={handleEmailInputChange}
        onClickVerificationButton={handleVerificationButtom}
        isShowFeedback={hasErrorEmail}
      />
      {hasErrorEmail && <SignUpFeedback classNames="ml-[-0px]" />}
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
