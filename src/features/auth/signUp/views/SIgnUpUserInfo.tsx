import SignUpAddressInput from "./SignUpAddressInput"
import SignUpVerificationInput from "./SignUpVerificationInput"
import SignUpFeedback from "./SignUpFeedback"
import SignUpGenderInput from "./SignUpGenderInput"
import SignUpInput from "./SignUpInput"
import SignUpInputWrap from "./SignUpInputWrap"
import SignUpBirthInput from "./SignUpBirthInput"
import SignUpEmailInput from "./SignUpEmailInput"
import SignUpPasswordInput from "./SignUpPasswordInput"
import SignUpPhoneVerificationInput from "./SignUpPhoneVerificationInput"

const SIgnUpUserInfo = () => {
  return (
    <div className="pb-[40px]">
      <SignUpInputWrap
        htmlFor="email"
        userInputComponent={<SignUpEmailInput />}
      />
      <SignUpInputWrap
        htmlFor="password"
        userInputComponent={<SignUpPasswordInput />}
      />

      {/* <SignUpInputWrap
        htmlFor="name"
        userInputComponent={<SignUpInput type="name" />}

      /> */}

      <SignUpInputWrap
        htmlFor="phone"
        userInputComponent={<SignUpPhoneVerificationInput />}
      />

      <SignUpInputWrap
        htmlFor="address"
        userInputComponent={<SignUpAddressInput />}
      />

      <SignUpInputWrap
        htmlFor="gender"
        userInputComponent={<SignUpGenderInput isMobile={false} />}
      />

      <SignUpInputWrap
        htmlFor="birth"
        userInputComponent={<SignUpBirthInput />}
      />
    </div>
  )
}

export default SIgnUpUserInfo
