"use client"
import { useNavigations } from "@/common/hooks/useNavigations"
import Stage, { IStage } from "@/common/views/Stage"
import {
  nextStep,
  resetSignUpState,
  resetStep,
  selectSignUpActiveStepState,
  selectSignUpCheckState,
  selectSignUpIsValidState,
  seletSignUpClauseState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useFeedbackModal } from "../hooks/useFeedbackModal"
import useSignUpMutation from "../hooks/useSignUpMutation"
import SignUpAddressInput from "./SignUpAddressInput"
import SignUpBirthInput from "./SignUpBirthInput"
import SignUpClause from "./SIgnUpClause"
import SignUpEmailInput from "./SignUpEmailInput"
import SignUpGenderInput from "./SignUpGenderInput"
import SignUpNameInput from "./SignUpNameInput"
import SignUpPasswordInput from "./SignUpPasswordInput"
import SignUpPhoneVerificationInput from "./SignUpPhoneVerificationInput"

const SignUpForm = () => {
  const { routeTo } = useNavigations()

  const dispatch = useAppDispatch()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const {
    age: isAgeAgree,
    privacy: isPrivacyAgree,
    term: isTermAgree,
    marketing,
  } = useAppSelector(seletSignUpClauseState)
  const {
    email: isEmailCheck,
    address: isAddressCheck,
    phone: isPhoneCheck,
  } = useAppSelector(selectSignUpCheckState)
  const {
    password: isPasswordValid,
    birth: isBirthValid,
    name: isNameValid,
  } = useAppSelector(selectSignUpIsValidState)

  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.append("marketing", marketing.toString())

    const response = await fetch("/api/auth/signUp", {
      method: "POST",
      body: formData,
    })

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
    // routeTo(ROUTE.HOME)
  }

  const handleStageNextClick = () => {
    dispatch(nextStep())
  }

  const handleStageBackClick = () => {
    dispatch(resetSignUpState())
    dispatch(resetStep())
  }

  const stageProps: IStage = {
    activeStep: selectSignUpActiveStep,
    stages: [
      "약관동의",
      "이메일",
      "비밀번호",
      "이름",
      "본인인증",
      "주소",
      "성별",
      "생년월일",
    ],
    stageContents: [
      <SignUpClause key="clause" />,
      <SignUpEmailInput key="email" />,
      <SignUpPasswordInput key="password" />,
      <SignUpNameInput key="name" />,
      <SignUpPhoneVerificationInput key="phone" />,
      <SignUpAddressInput key="address" />,
      <SignUpGenderInput key="gender" />,
      <SignUpBirthInput key="birth" />,
    ],
    firstButtonText: "동의하고 가입하기",
    finishButtonText: "회원가입",
    disabledNextButton: [
      !isAgeAgree || !isPrivacyAgree || !isTermAgree,
      !isEmailCheck,
      !isPasswordValid,
      !isNameValid,
      !isPhoneCheck,
      !isAddressCheck,
      false,
      !isBirthValid || isSignUpLoading,
    ],
    onClickBackButton: handleStageBackClick,
    onClickNextButton: handleStageNextClick,
    isFinishLoading: isSignUpLoading,
  }

  useEffect(() => {
    dispatch(resetSignUpState())
  }, [dispatch])

  return (
    <form
      onSubmit={handleSignUpSubmit}
      // action="/api/auth"
      className="sm:w-[400px] md:w-[400px] w-4/5 max-w-[800px] mx-auto h-[500px]"
    >
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
    </form>
  )
}

export default SignUpForm
