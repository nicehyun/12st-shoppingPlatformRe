import SignUpEmailInput from "../SignUpEmailInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpEmailInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpEmailInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
