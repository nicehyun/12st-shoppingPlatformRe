"use client"

import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import { Gender, UserInfo } from "@/common/types/user"
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
import { useFeedbackModal } from "../../hooks/useFeedbackModal"
import useSignUpMutation from "../../hooks/useSignUpMutation"

import SignUpClause from "../SIgnUpClause"
import MSignUpAddressInput from "./MSignUpAddressInput"

import MSignUpBirthInput from "./MSignUpBirthInput"
import MSignUpEmailInput from "./MSignUpEmailInput"
import MSignUpGenderInput from "./MSignUpGenderInput"
import MSignUpNameInput from "./MSignUpNameInput"

import MSignUpPasswordInput from "./MSignUpPasswordInput"
import MSignUpPhoneVerificationInput from "./MSignUpPhoneVerificationInput"

const MSignUpForm = () => {
  const { routeTo } = useNavigations()

  const dispatch = useAppDispatch()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { age, privacy, term, marketing } = useAppSelector(
    seletSignUpClauseState
  )
  const { email, address, phone } = useAppSelector(selectSignUpCheckState)
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

    const userInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      additionalAddress: formData.get("additionalAddress") as string,
      gender: formData.get("gender") as Gender,
      birth:
        (((formData.get("birthYear") as string) +
          formData.get("birthMonth")) as string) + formData.get("birthDay"),
      marketingClause: marketing,
    }

    const isSignUpSuccess = await signUpMutateAsync(userInfo)

    if (!isSignUpSuccess) {
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
      <MSignUpEmailInput key="email" />,
      <MSignUpPasswordInput key="password" />,
      <MSignUpNameInput key="name" />,
      <MSignUpPhoneVerificationInput key="phone" />,
      <MSignUpAddressInput key="address" />,
      <MSignUpGenderInput key="gender" />,
      <MSignUpBirthInput key="birth" />,
    ],
    firstButtonText: "동의하고 가입하기",
    finishButtonText: "회원가입",
    disabledNextButton: [
      !age || !privacy || !term,
      !email,
      !isPasswordValid,
      !isNameValid,
      !phone,
      !address,
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
      className="lg:hidden xl:hidden w-[400px] mx-auto h-[500px]"
    >
      <h2 className="mb-[20px] text-[20px] font-bold text-center">회원가입</h2>

      <Stage {...stageProps} />
    </form>
  )
}

export default MSignUpForm
