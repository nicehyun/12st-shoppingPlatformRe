"use client"

import { selectSignUpActiveStepState } from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useFeedbackModal } from "../../../../common/hooks/useFeedbackModal"
import useRequestVerificationMutation from "../hooks/useRequestVerificationMutation"
import useSendVerificationCodeMutation from "../hooks/useSendVerificationCodeMutation"
import { useUserInput } from "../../../../common/hooks/useUserInput"
import { phoneValidator } from "../utils/validation"
import SignUpFeedback from "../../../../common/views/Feedback"
import SignUpInputLayout from "./SignUpInputLayout"
import SignUpVerificationInput from "./SignUpVerificationInput"
import { BsFileLock2 } from "react-icons/bs"

export interface ISignUpPhoneVerificationInput {
  isVerificationChecked: boolean
  checkPhoneVerification: () => void
}

const SignUpPhoneVerificationInput = ({
  checkPhoneVerification,
  isVerificationChecked,
}: ISignUpPhoneVerificationInput) => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

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

  const {
    isLoading: isRequestVerificationLoading,
    mutateAsync: requestVerificationMutateAsync,
  } = useRequestVerificationMutation(phoneInputValue)

  const {
    isLoading: isSendVerificationCodeLoading,
    mutateAsync: sendVerificationCodeMutateAsync,
  } = useSendVerificationCodeMutation(phoneInputValue, verificationCode)

  const handlePhoneVerificationRequest = async () => {
    if (!isPhoneValid || isVerificationChecked) return

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
    checkPhoneVerification()
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
        isChecked={isVerificationChecked}
        isDisabledButton={
          !isPhoneValid || isShowVerificationCodeInput || isVerificationChecked
        }
        type="phone"
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
          isChecked={isShowVerificationCodeInput}
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
