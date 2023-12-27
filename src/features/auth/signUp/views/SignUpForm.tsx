"use client"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Stage, { IStage } from "@/features/common/views/Stage"
import {
  resetSignUpState,
  selectSignUpIsValidState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"
import { useSignUpClasue } from "../hooks/useSignUpClasue"
import useSignUpMutation from "../hooks/useSignUpMutation"
import useSignUpVerificationCheck from "../hooks/useSignUpVerificationCheck"

import SignUpClause, { ISignUpClause } from "./SIgnUpClause"
import SignUpEmailInput, { ISignUpEmailInput } from "./SignUpEmailInput"
import SignUpNameInput from "./SignUpNameInput"
import SignUpPasswordInput from "./SignUpPasswordInput"
import SignUpPhoneVerificationInput, {
  ISignUpPhoneVerificationInput,
} from "./SignUpPhoneVerificationInput"

const SignUpForm = () => {
  const { routeTo } = useNavigations()

  const dispatch = useAppDispatch()
  const { showFeedbackModalWithContent } = useFeedbackModal()

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

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

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

    if (!isAgeClauseCheck || !isPrivacyClauseCheck || !isTermClauseCheck) return

    if (
      !verificationCheckedState.email ||
      !isPasswordValid ||
      !isNameValid ||
      !verificationCheckedState.phone
    )
      return

    const formData = new FormData(event.currentTarget)

    const response = (await signUpMutateAsync({
      userInfo: {
        email: formData.get("signUp-email") as string,
        password: formData.get("signUp-password") as string,
        name: formData.get("signUp-name") as string,
        phone: formData.get("signUp-phone") as string,
        marketingClause: isMarketingClauseCheck,
      },
      requireCheck: {
        ...verificationCheckedState,
        ageClause: isAgeClauseCheck,
        termClause: isTermClauseCheck,
        privacyClause: isPrivacyClauseCheck,
      },
    })) as Response

    if (response.status >= 400) {
      showFeedbackModalWithContent(
        "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
      )

      setActiveStep(0)
      return
    }

    showFeedbackModalWithContent("회원가입을 축하합니다🎉")
    dispatch(resetSignUpState())
    routeTo(ROUTE.HOME)
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
