import SignUpAddressInput from "./SignUpAddressInput"
import SignUpVerificationInput from "./SignUpVerificationInput"
import SignUpFeedback from "./SignUpFeedback"
import SignUpGenderInput from "./SignUpGenderInput"
import SignUpInput from "./SignUpInput"
import SignUpInputWrap from "./SignUpInputWrap"
import SignUpBirthInput from "./SignUpBirthInput"

const SIgnUpUserInfo = () => {
  return (
    <div className="pb-[40px]">
      <SignUpInputWrap
        htmlFor="email"
        userInputComponent={
          <SignUpVerificationInput type="email" isDisabledButton={true} />
        }
        feedbackComponent={<SignUpFeedback />}
      />
      <SignUpInputWrap
        htmlFor="password"
        userInputComponent={<SignUpInput type="password" />}
        feedbackComponent={<SignUpFeedback />}
      />
      <SignUpInputWrap
        htmlFor="repassword"
        userInputComponent={<SignUpInput type="repassword" />}
        feedbackComponent={<SignUpFeedback />}
      />
      <SignUpInputWrap
        htmlFor="name"
        userInputComponent={<SignUpInput type="name" />}
        feedbackComponent={<SignUpFeedback />}
      />
      <SignUpInputWrap
        htmlFor="phone"
        userInputComponent={
          <SignUpVerificationInput type="phone" isDisabledButton={false} />
        }
        feedbackComponent={<SignUpFeedback />}
      />
      <SignUpInputWrap
        htmlFor="verificationPhone"
        userInputComponent={
          <SignUpVerificationInput
            type="verificationPhone"
            isDisabledButton={false}
          />
        }
      />

      <SignUpInputWrap
        htmlFor="address"
        userInputComponent={<SignUpAddressInput />}
        feedbackComponent={<SignUpFeedback />}
      />

      <SignUpInputWrap
        htmlFor="gender"
        userInputComponent={<SignUpGenderInput />}
      />

      <SignUpInputWrap
        htmlFor="birth"
        userInputComponent={<SignUpBirthInput />}
        feedbackComponent={<SignUpFeedback />}
      />
    </div>
  )
}

export default SIgnUpUserInfo
