import {
  selectSignUpCheckState,
  verifyToPhone,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { useFeedbackModal } from "../../hooks/useFeedbackModal"
import useRequestVerificationMutation from "../../hooks/useRequestVerificationMutation"
import useSendVerificationCodeMutation from "../../hooks/useSendVerificationCodeMutation"
import { useSignUpUserInput } from "../../hooks/useSignUpUserInput"
import { phoneValidator } from "../../utils/validation"

import SignUpFeedback from "../SignUpFeedback"
import SignUpPhoneVerificationInput from "../SignUpPhoneVerificationInput"
import SignUpVerificationInput from "../SignUpVerificationInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPhoneVerificationInput = () => {
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
    <MSignUpInputLayout headingText="본인인증을 진행해주세요">
      <SignUpPhoneVerificationInput />
    </MSignUpInputLayout>
  )
}

export default MSignUpPhoneVerificationInput
