"use client"

import {
  selectSignUpActiveStepState,
  selectSignUpCheckState,
  verifyToPhone,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useFeedbackModal } from "../hooks/useFeedbackModal"
import useRequestVerificationMutation from "../hooks/useRequestVerificationMutation"
import useSendVerificationCodeMutation from "../hooks/useSendVerificationCodeMutation"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { phoneValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"

const SignUpPhoneVerificationInput = () => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const { showFeedbackModalWithContent } = useFeedbackModal()
  const [isShowVerificationCodeInput, setIsShowVerificationCodeInput] =
    useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  const { phone: isCheckedPhoneVerification } = useAppSelector(
    selectSignUpCheckState
  )

  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputValueChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset,
  } = useSignUpUserInput(phoneValidator)

  const {
    isLoading: isRequestVerificationLoading,
    mutateAsync: requestVerificationMutateAsync,
  } = useRequestVerificationMutation(phoneInputValue)

  const {
    isLoading: isSendVerificationCodeLoading,
    mutateAsync: sendVerificationCodeMutateAsync,
  } = useSendVerificationCodeMutation(phoneInputValue, verificationCode)

  const handlePhoneVerificationRequest = async () => {
    if (!isPhoneValid || isCheckedPhoneVerification) return

    await requestVerificationMutateAsync()

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

    setIsShowVerificationCodeInput(false)
    dispatch(verifyToPhone())
  }

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      reset()
      setVerificationCode("")
      return
    }
  }, [selectSignUpActiveStep])

  return (
    <SignUpInputLayout headingText="본인인증을 진행해주세요">
      <SignUpVerificationInput
        isDisabledButton={
          hasErrorPhone ||
          isShowVerificationCodeInput ||
          isCheckedPhoneVerification
        }
        type="phone"
        classNames="mb-[5px]"
        inputValue={phoneInputValue}
        isShowFeedback={hasErrorPhone}
        onBlurInput={handlePhoneInputBlur}
        onChangeInputValue={handlePhoneInputValueChange}
        onClickVerificationButton={handlePhoneVerificationRequest}
        isLoading={isRequestVerificationLoading}
        isReadOnly={isShowVerificationCodeInput || isCheckedPhoneVerification}
      />
      {hasErrorPhone && (
        <SignUpFeedback
          classNames="ml-0"
          content="유효한 휴대폰 번호가 아닙니다."
        />
      )}
      {isShowVerificationCodeInput && (
        <SignUpVerificationInput
          isDisabledButton={verificationCode.length !== 6}
          type="verificationPhone"
          inputValue={verificationCode}
          onChangeInputValue={(event) =>
            setVerificationCode(event.target.value)
          }
          onClickVerificationButton={handlePhoneVerificationCodeSend}
          isLoading={isSendVerificationCodeLoading}
        />
      )}
    </SignUpInputLayout>
  )
}

export default SignUpPhoneVerificationInput
