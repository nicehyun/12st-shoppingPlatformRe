"use client"

import {
  selectSignUpCheckState,
  verifyToPhone,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { useFeedbackModal } from "../hooks/useFeedbackModal"
import useRequestVerificationMutation from "../hooks/useRequestVerificationMutation"
import useSendVerificationCodeMutation from "../hooks/useSendVerificationCodeMutation"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { Mobile } from "../types/mobile"
import { phoneValidator } from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"
import SignUpVerificationInput from "./SignUpVerificationInput"

const SignUpPhoneVerificationInput = ({ isMobile }: Mobile) => {
  const dispatch = useAppDispatch()

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

  return (
    <>
      <div id="recaptcha-container"></div>
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
        isMobile={isMobile}
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
          isMobile={isMobile}
        />
      )}
    </>
  )
}

export default SignUpPhoneVerificationInput
