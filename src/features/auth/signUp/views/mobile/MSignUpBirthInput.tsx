import SignUpBirthInput from "../SignUpBirthInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpBirthInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpBirthInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpBirthInput
