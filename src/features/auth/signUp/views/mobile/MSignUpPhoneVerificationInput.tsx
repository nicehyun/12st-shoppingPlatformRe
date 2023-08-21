import { useSignUpUserInput } from "../../hooks/useSignUpUserInput"
import { phoneValidator } from "../../utils/validation"
import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPhoneVerificationInput = () => {
  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputValueChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset: phoneInputReset,
  } = useSignUpUserInput(phoneValidator)

  return (
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <div id="recaptcha-container"></div>
      <SignUpVerificationInput
        isDisabledButton={true}
        type="phone"
        classNames="mb-[5px]"
      />
      <SignUpFeedback
        classNames="ml-[-0px]"
        content="유효한 휴대폰 번호가 아닙니다."
      />
      <SignUpVerificationInput
        isDisabledButton={true}
        type="verificationPhone"
      />
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
