"use client"

import { useEffect, useState } from "react"
import { useUserInput } from "../../../common/hooks/useUserInput"
import {
  phoneLengthValidator,
  phoneStartValidator,
  phoneValidator,
} from "../models/validation"
import SignUpFeedback from "../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { BsFileLock2 } from "react-icons/bs"
import { useRequestVerificationMutation } from "../hooks/useRequestVerificationMutation"
import { useSendVerificationCodeMutation } from "../hooks/useSendVerificationCodeMutation"
import SignUpStepLayout from "./SignUpStepLayout"
import { useQueryClient } from "@tanstack/react-query"
import { selectSignUpStepState } from "@/redux/features/signUpSlice"
import { useAppSelector } from "@/redux/hooks"

interface ISignUpPhoneVerificationInput {
  isSignUpLoading: boolean
}

const SignUpPhoneVerificationInput = ({
  isSignUpLoading,
}: ISignUpPhoneVerificationInput) => {
  const signUpStep = useAppSelector(selectSignUpStepState)
  const [isShowVerificationCodeInput, setIsShowVerificationCodeInput] =
    useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  const queryClient = useQueryClient()
  const isPhoneVerificationCheck = (queryClient.getQueryData([
    "SignUpValidation",
    "phoneVerificationCheck",
  ]) ?? false) as boolean

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
    mutateAsync: requestVerificationMutateAsync,
  } = useRequestVerificationMutation(phoneInputValue)

  const {
    isLoading: isSendVerificationCodeLoading,
    mutateAsync: sendVerificationCodeMutateAsync,
    resetPhoneVerificationCheck,
  } = useSendVerificationCodeMutation(phoneInputValue, verificationCode)

  const handleSendVerificationCode = async () => {
    if (isSendVerificationCodeLoading) return

    const response = await sendVerificationCodeMutateAsync()

    if (response.status === 200) {
      handleVerficationCodeInputHide()
    }
  }

  const handleRequestVerificationCode = async () => {
    if (isRequestVerificationLoading) return

    await requestVerificationMutateAsync()

    setIsShowVerificationCodeInput(true)
  }

  const handleVerficationCodeInputHide = () => {
    setIsShowVerificationCodeInput(false)
    setVerificationCode("")
  }

  const handleRequestTimerExpire = () => {
    verificationCodeTimerEnd()
    handleVerficationCodeInputHide()
  }

  const requertVerificationCodeButtonContent = isPhoneVerificationCheck
    ? "인증완료"
    : isShowVerificationCodeInput
    ? "재요청"
    : "인증하기"

  useEffect(() => {
    if (signUpStep === 0) {
      reset()
      resetPhoneVerificationCheck()
      return
    }
  }, [signUpStep])

  return (
    <SignUpStepLayout
      isButtonDisabled={!isPhoneValid || !isPhoneVerificationCheck}
      buttonContent="회원가입"
      buttonType="submit"
      isLoading={isSignUpLoading}
    >
      <SignUpInputLayout headingText="본인인증을 진행해주세요">
        <SignUpVerificationInput
          maxLength={11}
          placeholder="휴대폰 번호는 숫자만 입력해주세요"
          buttonContent={requertVerificationCodeButtonContent}
          isDisabledButton={!isPhoneValid || isPhoneVerificationCheck}
          id="signUp-phone"
          classNames="mb-[5px]"
          inputValue={phoneInputValue}
          isShowFeedback={hasErrorPhone}
          onBlurInput={handlePhoneInputBlur}
          onChangeInputValue={handlePhoneInputValueChange}
          onClickVerificationButton={handleRequestVerificationCode}
          isLoading={isRequestVerificationLoading}
          isReadOnly={isShowVerificationCodeInput || isPhoneVerificationCheck}
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
            onClickVerificationButton={handleSendVerificationCode}
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
        <SignUpFeedback isValid={isPhoneVerificationCheck} content="본인인증" />
      </SignUpInputLayout>
    </SignUpStepLayout>
  )
}

export default SignUpPhoneVerificationInput
