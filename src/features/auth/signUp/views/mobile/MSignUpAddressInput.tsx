import SignUpAddressInput from "../SignUpAddressInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpAddressInput = () => {
  return (
    <MSignUpInputLayout headingText="주소를 입력해주세요">
      <SignUpAddressInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpAddressInput
