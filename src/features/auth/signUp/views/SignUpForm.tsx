"use client"

import Stage, { IStage } from "@/features/common/views/Stage"
import {
  resetSignUpState,
  selectSignUpIsValidState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useSignUpClasue } from "../hooks/useSignUpClasue"
import useSignUpVerificationCheck from "../hooks/useSignUpVerificationCheck"
import SignUpClause, { ISignUpClause } from "./SIgnUpClause"
import SignUpEmailInput, { ISignUpEmailInput } from "./SignUpEmailInput"
import SignUpNameInput from "./SignUpNameInput"
import SignUpPasswordInput from "./SignUpPasswordInput"
import SignUpPhoneVerificationInput, {
  ISignUpPhoneVerificationInput,
} from "./SignUpPhoneVerificationInput"
import { useSignUpMutation } from "../hooks/useSignUpMutation"

const SignUpForm = () => {
  const dispatch = useAppDispatch()

  const [activeStep, setActiveStep] = useState(0)
  const { checkedClaseState, toggleClauseCheck, resetClauseCheck } =
    useSignUpClasue()

  const {
    checkEmailDuplication,
    checkPhoneVerification,
    verificationCheckedState,
    resetEmailDuplicateCheck,
    resetPhoneVerificationCheck,
  } = useSignUpVerificationCheck()

  const signUpEmailInputProps: ISignUpEmailInput = {
    activeStep,
    isVerificationChecked: verificationCheckedState.email,
    checkEmailDuplication,
    resetEmailDuplicateCheck,
  }

  const signUpPhoneVerificationInputProps: ISignUpPhoneVerificationInput = {
    activeStep,
    isVerificationChecked: verificationCheckedState.phone,
    checkPhoneVerification,
    resetEmailDuplicateCheck,
  }

  const signUpClauseProps: ISignUpClause = {
    clause: checkedClaseState,
    toggleClauseCheck: toggleClauseCheck,
  }

  const {
    age: isAgeClauseCheck,
    term: isTermClauseCheck,
    privacy: isPrivacyClauseCheck,
    marketing: isMarketingClauseCheck,
  } = checkedClaseState

  const { password: isPasswordValid, name: isNameValid } = useAppSelector(
    selectSignUpIsValidState
  )

  const { isLoading: isSignUpLoading, signUpMuatateAsync } = useSignUpMutation({
    clause: {
      isAgeClauseChecked: isAgeClauseCheck,
      isMarketingClauseChecked: isMarketingClauseCheck,
      isPrivacyClauseChecked: isPrivacyClauseCheck,
      isTermClauseChecked: isTermClauseCheck,
    },
    verification: {
      isEmailChecked: verificationCheckedState.email,
      isPhoneChecked: verificationCheckedState.phone,
    },
  })

  const handleNextStepButtonClick = () => {
    setActiveStep((prev) => prev + 1)
  }

  const handleBackStepButtonClick = () => {
    setActiveStep(0)
    resetEmailDuplicateCheck()
    resetPhoneVerificationCheck()
    resetClauseCheck()
  }

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    await signUpMuatateAsync(event)
    dispatch(resetSignUpState())
    setActiveStep(0)
    resetClauseCheck()
  }

  const stageProps: IStage = {
    activeStep: activeStep,
    stages: ["약관동의", "이메일", "비밀번호", "이름", "본인인증"],
    stageContents: [
      <SignUpClause key="clause" {...signUpClauseProps} />,
      <SignUpEmailInput key="email" {...signUpEmailInputProps} />,
      <SignUpPasswordInput key="password" activeStep={activeStep} />,
      <SignUpNameInput key="name" activeStep={activeStep} />,
      <SignUpPhoneVerificationInput
        key="phone"
        {...signUpPhoneVerificationInputProps}
      />,
    ],

    firstButtonText: "동의하고 가입하기",
    finishButtonText: "회원가입",
    disabledNextButton: [
      !isAgeClauseCheck || !isPrivacyClauseCheck || !isTermClauseCheck,
      !verificationCheckedState.email,
      !isPasswordValid,
      !isNameValid,
      !verificationCheckedState.phone,
      isSignUpLoading,
    ],
    onClickBackButton: handleBackStepButtonClick,
    onClickNextButton: handleNextStepButtonClick,
    isFinishLoading: isSignUpLoading,
  }

  useEffect(() => {
    return () => {
      dispatch(resetSignUpState())
    }
  }, [dispatch])

  return (
    <form
      onSubmit={handleSignUpSubmit}
      className="sm:w-[400px] md:w-[400px] w-4/5 max-w-[800px] mx-auto h-[500px]"
    >
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
    </form>
  )
}

export default SignUpForm
