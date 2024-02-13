"use client"

import { useEffect, useState } from "react"
import { useUserInput } from "../../../common/hooks/useUserInput"
import {
  phoneLengthValidator,
  phoneStartValidator,
  phoneValidator,
} from "../utils/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { BsFileLock2 } from "react-icons/bs"
import { useRequestVerificationMutation } from "../hooks/useRequestVerificationMutation"
import { useSendVerificationCodeMutation } from "../hooks/useSendVerificationCodeMutation"

export interface ISignUpPhoneVerificationInput {
  activeStep: number
  isVerificationChecked: boolean
  checkPhoneVerification: () => void
  resetEmailDuplicateCheck: () => void
}

const SignUpPhoneVerificationInput = ({
  resetEmailDuplicateCheck,
  checkPhoneVerification,
  isVerificationChecked,
  activeStep,
}: ISignUpPhoneVerificationInput) => {
  const [isShowVerificationCodeInput, setIsShowVerificationCodeInput] =
    useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputValueChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset,
  } = useUserInput(phoneValidator)

  const isPhoneStartValid = phoneStartValidator(phoneInputValue)
  const isPhoneLengthValid = phoneLengthValidator(phoneInputValue)

  const {
    isLoading: isRequestVerificationLoading,
    verificationCodeTimerEnd,
    requestVerificationMutateAsync,
  } = useRequestVerificationMutation(
    phoneInputValue,
    isVerificationChecked,
    handleRequestVerificationCb
  )

  const {
    isLoading: isSendVerificationCodeLoading,
    sendVerificationCodeMutateAsync,
  } = useSendVerificationCodeMutation(
    phoneInputValue,
    verificationCode,
    handleValidSendVerificationCode
  )

  function handleRequestVerificationCb() {
    setIsShowVerificationCodeInput(true)
  }

  const handleVerficationCodeInputHide = () => {
    setIsShowVerificationCodeInput(false)
    setVerificationCode("")
  }

  function handleValidSendVerificationCode() {
    handleVerficationCodeInputHide()
    checkPhoneVerification()
  }

  const handleRequestTimerExpire = () => {
    verificationCodeTimerEnd()
    handleVerficationCodeInputHide()
  }

  const requertVerificationCodeButtonContent = isVerificationChecked
    ? "인증완료"
    : isShowVerificationCodeInput
    ? "재요청"
    : "인증하기"

  useEffect(() => {
    if (activeStep === 0) {
      reset()
      resetEmailDuplicateCheck()
      return
    }
  }, [activeStep])

  return (
    <SignUpInputLayout headingText="본인인증을 진행해주세요">
      <SignUpVerificationInput
        maxLength={11}
        placeholder="휴대폰 번호는 숫자만 입력해주세요"
        buttonContent={requertVerificationCodeButtonContent}
        isChecked={isVerificationChecked}
        isDisabledButton={!isPhoneValid || isVerificationChecked}
        id="signUp-phone"
        classNames="mb-[5px]"
        inputValue={phoneInputValue}
        isShowFeedback={hasErrorPhone}
        onBlurInput={handlePhoneInputBlur}
        onChangeInputValue={handlePhoneInputValueChange}
        onClickVerificationButton={requestVerificationMutateAsync}
        isLoading={isRequestVerificationLoading}
        isReadOnly={isShowVerificationCodeInput || isVerificationChecked}
      />

      {isShowVerificationCodeInput && (
        <SignUpVerificationInput
          maxLength={6}
          placeholder="인증번호 6자리를 입력해주세요"
          buttonContent="인증"
          isDisabledButton={verificationCode.length !== 6}
          id="input-verificationCode_response"
          inputValue={verificationCode}
          onChangeInputValue={(event) =>
            setVerificationCode(event.target.value)
          }
          onClickVerificationButton={sendVerificationCodeMutateAsync}
          isLoading={isSendVerificationCodeLoading}
          isNeedTimerComponent
          timerExpireFn={handleRequestTimerExpire}
        />
      )}
      <span className="flex items-center text-[14px] mt-[20px] font-semibold">
        <span className="mr-[5px] text-lightRed">
          <BsFileLock2 />
        </span>
        안전한 거래를 위해 딱 한번 본인인증을 진행합니다.
      </span>

      <SignUpFeedback
        isValid={isPhoneStartValid}
        content="010, 011, 016, 017, 018, 019으로 시작"
      />
      <SignUpFeedback isValid={isPhoneLengthValid} content="10~11자리" />
      <SignUpFeedback isValid={isVerificationChecked} content="본인인증" />
    </SignUpInputLayout>
  )
}

export default SignUpPhoneVerificationInput
