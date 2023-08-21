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
    onClickVerificationButton: () => void
    isLoading: boolean
  }
  verificationPhon?: {
    inputValue: string
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    onBlurInput: () => void
    hasError: boolean
    onClickVerificationButton: () => void
    isLoading: boolean
  }
}
// TODO : 인증번호 발송시 인증하기 버튼 비활성화
const MSignUpPhoneVerificationInput = ({
  phone,
}: // verificationPhone,
IMSignUpPhoneVerificationInput) => {
  const {
    inputValue: phoneInputValue,
    onChangeInputValue: onChangePhoneInputValue,
    onBlurInput: onBlurPhoneInput,
    hasError: hasErrorPhone,
    onClickVerificationButton: onClickRequestVerificationCode,
    isLoading: isLoadingPhone,
  } = phone
  // const {
  //   inputValue: verificationPhoneInputValue,
  //   onChangeInputValue: onChangeVerificationPhoneInputValue,
  //   onBlurInput: onBlurVerificationPhoneInput,
  //   hasError: hasErrorVerificationPhone,
  //   onClickVerificationButton: onClickResponseVerificationCode,
  //   isLoading: isLoadingVerificationPhone,
  // } = verificationPhone
  return (
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <div id="recaptcha-container"></div>
      <SignUpVerificationInput
        isDisabledButton={hasErrorPhone}
        type="phone"
        classNames="mb-[5px]"
        inputValue={phoneInputValue}
        isShowFeedback={hasErrorPhone}
        onBlurInput={onBlurPhoneInput}
        onChangeInputValue={onChangePhoneInputValue}
        onClickVerificationButton={onClickRequestVerificationCode}
        isLoading={isLoadingPhone}
      />
      {hasErrorPhone && (
        <SignUpFeedback
          classNames="ml-0"
          content="유효한 휴대폰 번호가 아닙니다."
        />
      )}

      {/* <SignUpVerificationInput
        isDisabledButton={true}
        type="verificationPhone"
        inputValue={verificationPhoneInputValue}
        isShowFeedback={hasErrorVerificationPhone}
        onBlurInput={onBlurVerificationPhoneInput}
        onChangeInputValue={onChangeVerificationPhoneInputValue}
        onClickVerificationButton={onClickResponseVerificationCode}
        isLoading={isLoadingVerificationPhone}
      /> */}
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
