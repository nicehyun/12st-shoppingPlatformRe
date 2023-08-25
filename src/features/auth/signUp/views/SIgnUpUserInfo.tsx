import SignUpAddressInput from "./SignUpAddressInput"

import SignUpGenderInput from "./SignUpGenderInput"

import SignUpInputWrap from "./SignUpInputWrap"
import SignUpBirthInput from "./SignUpBirthInput"
import SignUpEmailInput from "./SignUpEmailInput"
import SignUpPasswordInput from "./SignUpPasswordInput"
import SignUpPhoneVerificationInput from "./SignUpPhoneVerificationInput"
import SignUpNameInput from "./SignUpNameInput"

const SIgnUpUserInfo = () => {
  return (
    <div className="pb-[40px]">
      <SignUpInputWrap
        htmlFor="email"
        userInputComponent={<SignUpEmailInput isMobile={false} />}
      />
      <SignUpInputWrap
        htmlFor="password"
        userInputComponent={<SignUpPasswordInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="name"
        userInputComponent={<SignUpNameInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="phone"
        userInputComponent={<SignUpPhoneVerificationInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="address"
        userInputComponent={<SignUpAddressInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="gender-male"
        userInputComponent={<SignUpGenderInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="birthYear"
        userInputComponent={<SignUpBirthInput isMobile={false} />}
      />
    </div>
  )
}

export default SIgnUpUserInfo
