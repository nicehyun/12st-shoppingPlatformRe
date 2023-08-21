"use client"

import Stage, { IStage } from "@/common/views/Stage"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import {
  duplicateToEmail,
  resetEmailDuplication,
  resetSignUpState,
  selectSignUpCheckState,
  seletSignUpClauseState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEvent, useEffect } from "react"
import useEmailDuplicateCheckMutaion from "../../hooks/useEmailDuplicateMutation"
import {
  useSignUpUserInput,
  useSignUpUserInputWithRePassword,
} from "../../hooks/useSignUpUserInput"
import { emailValidator, passwordValidator } from "../../utils/validation"
import SignUpClause from "../SIgnUpClause"
import MSignUpAddressInput from "./MSignUpAddressInput"

import MSignUpBirthInput from "./MSignUpBirthInput"
import MSignUpEmailInput, { IMSignUpEmailInput } from "./MSignUpEmailInput"
import MSignUpGenderInput from "./MSignUpGenderInput"
import MSignUpPasswordInput, {
  IMSignUpPasswordInput,
} from "./MSignUpPasswordInput"
import MSignUpPhoneVerificationInput from "./MSignUpPhoneVerificationInput"

const MSignUpForm = () => {
  const dispatch = useAppDispatch()

  const showFeedbackModalWithContent = (modalContent: string) => {
    dispatch(showFeedbackModal({ modalContent }))
  }

  const { age, privacy, term } = useAppSelector(seletSignUpClauseState)
  const { email, address, phone } = useAppSelector(selectSignUpCheckState)

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
      <MSignUpPhoneVerificationInput key="phone" />,
      <MSignUpAddressInput key="address" />,
      <MSignUpGenderInput key="gender" />,
      <MSignUpBirthInput key="birth" />,
    ],
    firstButtonText: "동의하고 가입하기",
    finishButtonText: "회원가입",
    disabledNextButton: [
      !age || !privacy || !term,
      !isEmailValid || !email,
      !isPasswordValid || !isRepasswordValid,
    ],
  }

  useEffect(() => {
    dispatch(resetSignUpState())
  }, [dispatch])

  return (
    <form className="lg:hidden xl:hidden w-[400px] mx-auto h-[500px]">
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
    </form>
  )
}

export default MSignUpForm
