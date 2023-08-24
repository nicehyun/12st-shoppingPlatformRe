import SignUpNameInput from "../SignUpNameInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpNameInput = () => {
  return (
    <MSignUpInputLayout headingText="이름을 입력해주세요">
      <SignUpNameInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpNameInput
