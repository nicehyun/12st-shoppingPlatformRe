"use client"

import Stage, { IStage } from "@/common/views/Stage"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import {
  duplicateToEmail,
  resetEmailDuplication,
  resetSignUpState,
  selectSignUpCheckState,
  seletSignUpClauseState,
  verifyToPhone,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEvent, useEffect, useState } from "react"
import useEmailDuplicateCheckMutaion from "../../hooks/useEmailDuplicateMutation"
import useRequestVerificationMutation from "../../hooks/useRequestVerificationMutation"
import useSendVerificationCodeMutation from "../../hooks/useSendVerificationCodeMutation"
import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../../hooks/useSignUpUserInput"
import {
  additionalAddressValidator,
  emailValidator,
  passwordValidator,
  phoneValidator,
} from "../../utils/validation"
import SignUpClause from "../SIgnUpClause"
import MSignUpAddressInput, {
  IMSignUpAddressInput,
} from "./MSignUpAddressInput"

import MSignUpBirthInput from "./MSignUpBirthInput"
import MSignUpEmailInput, { IMSignUpEmailInput } from "./MSignUpEmailInput"
import MSignUpGenderInput from "./MSignUpGenderInput"
import MSignUpPasswordInput, {
  IMSignUpPasswordInput,
} from "./MSignUpPasswordInput"
import MSignUpPhoneVerificationInput, {
  IMSignUpPhoneVerificationInput,
} from "./MSignUpPhoneVerificationInput"

const MSignUpForm = () => {
  const dispatch = useAppDispatch()

  const showFeedbackModalWithContent = (modalContent: string) => {
    dispatch(showFeedbackModal({ modalContent }))
  }

  const { age, privacy, term } = useAppSelector(seletSignUpClauseState)
  const { email, address, phone } = useAppSelector(selectSignUpCheckState)

  const [isShowVerificationInput, setIsShowVerificationInput] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  const {
    value: additionalAddressInputValue,
    handleValueChange: handleAdditionalAddressInputValueChange,
    handleInputBlur: handleAdditionalAddressInputBlur,
    isValid: isAdditionalAddressValid,
    hasError: hasErrorAdditionalAddress,
    reset: additionalAddressInputReset,
  } = useSignUpUserInput(additionalAddressValidator)

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    isValid: isEmailValid,
    hasError: hasErrorEmail,
    reset: emailInputReset,
  } = useSignUpUserInput(emailValidator)

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    isValid: isPasswordValid,
    hasError: hasErrorPassword,
    reset: passwordInputReset,
  } = useSignUpUserInput(passwordValidator)

  const {
    value: repasswordInputValue,
    handleValueChange: handleRepasswordInputValueChange,
    handleInputBlur: handleRepasswordInputBlur,
    isValid: isRepasswordValid,
    hasError: hasErrorRepassword,
    reset: repasswordInputReset,
  } = useSignUpUserInputWithRePassword(passwordInputValue)

  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputValueChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset: phoneInputReset,
  } = useSignUpUserInput(phoneValidator)

  const {
    isLoading: isRequestVerificationLoading,
    mutateAsync: requestVerificationMutateAsync,
  } = useRequestVerificationMutation(phoneInputValue)

  const handleRequestPhoneVerification = async () => {
    if (!isPhoneValid || phone) return

    await requestVerificationMutateAsync()

    showFeedbackModalWithContent("인증 번호가 발송되었습니다.")

    setIsShowVerificationInput(true)
  }

  const {
    isLoading: isEmailDuplicateCheckLoading,
    mutateAsync: emailDuplicateCheckMutateAsync,
  } = useEmailDuplicateCheckMutaion(emailInputValue)

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetEmailDuplication())

    handleEmailInputValueChange(event)
  }

  const handleEmailDuplicateCheck = async () => {
    const isExistedEmail = await emailDuplicateCheckMutateAsync()

    if (isExistedEmail) {
      showFeedbackModalWithContent("사용할 수 없는 이메일입니다.")
      return
    }

    dispatch(duplicateToEmail())
    showFeedbackModalWithContent("시용 가능한 이메일입니다.")
  }

  const handleVerification = async () => {
    const isVerificationValidAsync = await sendVerificationCodeMutateAsync()

    if (!isVerificationValidAsync) {
      showFeedbackModalWithContent("인증 번호가 틀렸습니다.")

      return
    }

    showFeedbackModalWithContent("본인인증이 완료되었습니다.")

    setIsShowVerificationInput(false)
    dispatch(verifyToPhone())
  }

  const handletestSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(`year :  ${formData.get("birthYear")}`)
  }

  const {
    isLoading: isSendVerificationCodeLoading,
    mutateAsync: sendVerificationCodeMutateAsync,
  } = useSendVerificationCodeMutation(phoneInputValue, verificationCode)

  const mSignUpEmailInputProps: IMSignUpEmailInput = {
    emailInputValue,
    hasErrorEmail,
    isCheckedEmail: email,
    isEmailDuplicateCheckLoading,
    isEmailValid,
    onBlurEmailInput: handleEmailInputBlur,
    onChangeEmailInputValue: handleEmailInputChange,
    onCheckEmailDuplicate: handleEmailDuplicateCheck,
  }

  const mSignUpPhoneVerificationInputProps: IMSignUpPhoneVerificationInput = {
    phone: {
      inputValue: phoneInputValue,
      hasError: hasErrorPhone,
      isLoading: isRequestVerificationLoading,
      onBlurInput: handlePhoneInputBlur,
      onChangeInputValue: handlePhoneInputValueChange,
      onRequestVerificate: handleRequestPhoneVerification,
    },
    verificationPhone: {
      isShowVerificationInput,
      inputValue: verificationCode,
      onChangeInputValue: (event) => setVerificationCode(event.target.value),
      onResponseVerificate: handleVerification,
      isLoading: isSendVerificationCodeLoading,
      isSuccessVerification: phone,
    },
  }

  const mSignUpAddressInputProps: IMSignUpAddressInput = {
    additionalAddressInputValue,
    hasErrorAdditionalAddress,
    onBlurAdditionalAddressInput: handleAdditionalAddressInputBlur,
    onChangeAdditionalAddressInputValue:
      handleAdditionalAddressInputValueChange,
    reset: additionalAddressInputReset,
  }

  const mSignUpPasswordInputProps: IMSignUpPasswordInput = {
    password: {
      inputValue: passwordInputValue,
      hasError: hasErrorPassword,
      onBlurInput: handlePasswordInputBlur,
      onChangeInputValue: handlePasswordInputValueChange,
    },

    repassword: {
      inputValue: repasswordInputValue,
      hasError: hasErrorRepassword,
      onBlurInput: handleRepasswordInputBlur,
      onChangeInputValue: handleRepasswordInputValueChange,
    },
  }

  const stageProps: IStage = {
    stages: [
      "약관동의",
      "이메일",
      "비밀번호",
      "본인인증",
      "주소",
      "성별",
      "생년월일",
    ],
    stageContents: [
      <SignUpClause key="clause" />,
      <MSignUpEmailInput key="email" {...mSignUpEmailInputProps} />,
      <MSignUpPasswordInput key="password" {...mSignUpPasswordInputProps} />,
      <MSignUpPhoneVerificationInput
        key="phone"
        {...mSignUpPhoneVerificationInputProps}
      />,
      <MSignUpAddressInput key="address" {...mSignUpAddressInputProps} />,
      <MSignUpGenderInput key="gender" />,
      <MSignUpBirthInput key="birth" />,
    ],
    firstButtonText: "동의하고 가입하기",
    finishButtonText: "회원가입",
    disabledNextButton: [
      !age || !privacy || !term,
      !isEmailValid || !email,
      !isPasswordValid || !isRepasswordValid,
      !isPhoneValid || !phone,
      !isAdditionalAddressValid,
    ],
  }

  useEffect(() => {
    dispatch(resetSignUpState())
  }, [dispatch])

  return (
    <form
      onSubmit={handletestSubmit}
      className="lg:hidden xl:hidden w-[400px] mx-auto h-[500px]"
    >
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
      <button>테스트 회원가입 버튼</button>
    </form>
  )
}

export default MSignUpForm
