import { ChangeEvent } from "react"

import SignUpFeedback from "../SignUpFeedback"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

export interface IMSignUpPhoneVerificationInput {
  phone: {
    inputValue: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    onBlurInput: () => void
    hasError: boolean
    onRequestVerificate: () => Promise<void>
    isLoading: boolean
  }
  verificationPhone: {
    isShowVerificationInput: boolean
    inputValue: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    onResponseVerificate: () => Promise<void>
    isLoading: boolean
    isSuccessVerification: boolean
  }
}

const MSignUpPhoneVerificationInput = ({
  phone,
  verificationPhone,
}: IMSignUpPhoneVerificationInput) => {
  const {
    inputValue: phoneInputValue,
    onChangeInputValue: onChangePhoneInputValue,
    onBlurInput: onBlurPhoneInput,
    hasError: hasErrorPhone,
    onRequestVerificate: onClickRequestVerificate,
    isLoading: isLoadingPhone,
  } = phone

  const {
    isShowVerificationInput,
    inputValue: verificationPhoneInputValue,
    onChangeInputValue: onChangeVerificationPhoneInputValue,
    onResponseVerificate: onClickResponseVerificate,
    isLoading: isLoadingVerificationPhone,
    isSuccessVerification,
  } = verificationPhone

  return (
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <div id="recaptcha-container"></div>
      <SignUpVerificationInput
        isDisabledButton={
          hasErrorPhone || isShowVerificationInput || isSuccessVerification
        }
        type="phone"
        classNames="mb-[5px]"
        inputValue={phoneInputValue}
        isShowFeedback={hasErrorPhone}
        onBlurInput={onBlurPhoneInput}
        onChangeInputValue={onChangePhoneInputValue}
        onClickVerificationButton={onClickRequestVerificate}
        isLoading={isLoadingPhone}
        isReadOnly={isShowVerificationInput || isSuccessVerification}
      />
      {hasErrorPhone && (
        <SignUpFeedback
          classNames="ml-0"
          content="유효한 휴대폰 번호가 아닙니다."
        />
      )}
      {isShowVerificationInput && (
        <SignUpVerificationInput
          isDisabledButton={verificationPhoneInputValue.length !== 6}
          type="verificationPhone"
          inputValue={verificationPhoneInputValue}
          onChangeInputValue={onChangeVerificationPhoneInputValue}
          onClickVerificationButton={onClickResponseVerificate}
          isLoading={isLoadingVerificationPhone}
        />
      )}
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
