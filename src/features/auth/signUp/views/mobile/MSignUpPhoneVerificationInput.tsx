import SignUpPhoneVerificationInput from "../SignUpPhoneVerificationInput"

import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPhoneVerificationInput = () => {
  return (
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <SignUpPhoneVerificationInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
