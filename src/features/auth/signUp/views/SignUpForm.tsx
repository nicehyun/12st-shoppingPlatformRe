"use client"
import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import Stage, { IStage } from "@/common/views/Stage"
import {
  nextStep,
  resetSignUpState,
  resetStep,
  selectSignUpActiveStepState,
  selectSignUpIsValidState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useFeedbackModal } from "../../../../common/hooks/useFeedbackModal"
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
    isVerificationChecked: verificationCheckedState.email,
    checkEmailDuplication,
    resetEmailDuplicateCheck,
  }

  const signUpPhoneVerificationInputProps: ISignUpPhoneVerificationInput = {
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

  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

  const testSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log(formData.get("signUp-clause-all"))
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
    console.log(
      formData.append("signUp-clause-all", `${isMarketingClauseCheck}`)
    )
    formData.append("marketing", `${isMarketingClauseCheck}`)

    const response = (await signUpMutateAsync(formData)) as Response

    if (!response.ok) {
      showFeedbackModalWithContent(
        "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
      )
      dispatch(resetStep())
      return
    }

    showFeedbackModalWithContent("회원가입을 축하합니다🎉")
    dispatch(resetSignUpState())
    dispatch(resetStep())
    routeTo(ROUTE.HOME)
  }

  const handleStageNextClick = () => {
    dispatch(nextStep())
  }

  const handleStageBackClick = () => {
    resetEmailDuplicateCheck()
    resetPhoneVerificationCheck()
    resetClauseCheck()
    dispatch(resetStep())
  }

  const stageProps: IStage = {
    activeStep: selectSignUpActiveStep,
    stages: ["약관동의", "이메일", "비밀번호", "이름", "본인인증"],
    stageContents: [
      <SignUpClause key="clause" {...signUpClauseProps} />,
      <SignUpEmailInput key="email" {...signUpEmailInputProps} />,
      <SignUpPasswordInput key="password" />,
      <SignUpNameInput key="name" />,
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
    onClickBackButton: handleStageBackClick,
    onClickNextButton: handleStageNextClick,
    isFinishLoading: isSignUpLoading,
  }

  useEffect(() => {
    return () => {
      dispatch(resetSignUpState())
      dispatch(resetStep())
    }
  }, [dispatch])

  return (
    <form
      onSubmit={testSubmit}
      className="sm:w-[400px] md:w-[400px] w-4/5 max-w-[800px] mx-auto h-[500px]"
    >
      <button type="submit">sad</button>
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
    </form>
  )
}

export default SignUpForm
