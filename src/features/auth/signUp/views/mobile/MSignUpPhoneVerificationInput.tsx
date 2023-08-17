import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPhoneVerificationInput = () => {
  return (
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <SignUpVerificationInput
        isDisabledButton={true}
        type="phone"
        classNames="mb-[5px]"
      />
      <SignUpFeedback classNames="ml-0" />
      <SignUpVerificationInput
        isDisabledButton={true}
        type="verificationPhone"
      />
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
