"use client"

import { useEffect, useState } from "react"
import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"

import useSendVerificationCodeMutation from "../hooks/useSendVerificationCodeMutation"
import { useUserInput } from "../../../common/hooks/useUserInput"
import { phoneValidator } from "../utils/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { BsFileLock2 } from "react-icons/bs"
import { useRequestVerificationMutation } from "../hooks/useRequestVerificationMutation"

import { verifyPhoneAPI } from "../models/verifyPhoneAPI"
export interface ISignUpPhoneVerificationInput {
  activeStep: number
  isVerificationChecked: boolean
  checkPhoneVerification: () => void
}

const SignUpPhoneVerificationInput = ({
  checkPhoneVerification,
  isVerificationChecked,
  activeStep,
}: ISignUpPhoneVerificationInput) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
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

  const { isRequestVerificationLoading, requestVerificationMutateAsync } =
    useRequestVerificationMutation()

  const {
    isLoading: isSendVerificationCodeLoading,
    mutateAsync: sendVerificationCodeMutateAsync,
  } = useSendVerificationCodeMutation(phoneInputValue, verificationCode)

  const hanelVerficationCodeInputHide = () => {
    setIsShowVerificationCodeInput(false)
    setVerificationCode("")
  }

  const handleVerificationCodeTimerEnd = () => {
    showFeedbackModalWithContent("인증 시간이 만료되었습니다.")
    hanelVerficationCodeInputHide()
    verifyPhoneAPI.removeVerificationId(phoneInputValue)
  }

  const handlePhoneVerificationRequest = async () => {
    if (!isPhoneValid || isVerificationChecked) return
    hanelVerficationCodeInputHide()

    await requestVerificationMutateAsync({ phoneInputValue })

    showFeedbackModalWithContent("인증 번호가 발송되었습니다.")

    setIsShowVerificationCodeInput(true)
  }

  const handlePhoneVerificationCodeSend = async () => {
    const isVerificationValidAsync = await sendVerificationCodeMutateAsync()

    if (!isVerificationValidAsync) {
      showFeedbackModalWithContent("인증 번호가 틀렸습니다.")

      return
    }

    showFeedbackModalWithContent("본인인증이 완료되었습니다.")

    hanelVerficationCodeInputHide()
    checkPhoneVerification()
  }

  const requertVerificationCodeButtonContent = isVerificationChecked
    ? "인증완료"
    : isShowVerificationCodeInput
    ? "재요청"
    : "인증하기"

  useEffect(() => {
    if (activeStep === 0) {
      reset()
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
        onClickVerificationButton={handlePhoneVerificationRequest}
        isLoading={isRequestVerificationLoading}
        isReadOnly={isShowVerificationCodeInput || isVerificationChecked}
      />
      {hasErrorPhone && (
        <SignUpFeedback
          classNames="ml-0"
          content="유효한 휴대폰 번호가 아닙니다."
        />
      )}
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
          onClickVerificationButton={handlePhoneVerificationCodeSend}
          isLoading={isSendVerificationCodeLoading}
          isNeedTimerComponent
          timerExpireFn={handleVerificationCodeTimerEnd}
        />
      )}

      <span className="flex items-center text-[14px] mt-[20px] font-semibold">
        <span className="mr-[5px] text-lightRed">
          <BsFileLock2 />
        </span>
        안전한 거래를 위해 딱 한번 본인인증을 진행해요.
      </span>
    </SignUpInputLayout>
  )
}

export default SignUpPhoneVerificationInput
