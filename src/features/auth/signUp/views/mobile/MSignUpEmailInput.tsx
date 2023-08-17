import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpEmailInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpVerificationInput isDisabledButton={true} type="email" />
      <SignUpFeedback classNames="ml-0" />
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
