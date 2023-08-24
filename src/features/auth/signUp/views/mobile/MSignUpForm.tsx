"use client"

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

import MSignUpPasswordInput from "./MSignUpPasswordInput"
import MSignUpPhoneVerificationInput from "./MSignUpPhoneVerificationInput"

// TODO : firebase 트래픽 초과 - email, phone 값 fasle 대신 전달하기
const MSignUpForm = () => {
  const dispatch = useAppDispatch()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { age, privacy, term, marketing } = useAppSelector(
    seletSignUpClauseState
  )
  const { email, address, phone } = useAppSelector(selectSignUpCheckState)
  const { password: isPasswordValid, birth: isBirthValid } = useAppSelector(
    selectSignUpIsValidState
  )

  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)
  console.log(selectSignUpActiveStep)

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // TODO : Name 수정하기
    const userInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: "",
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

      // routeTo(ROUTE.SIGNUP)
      return
    }

    showFeedbackModalWithContent("회원가입을 축하합니다🎉")

    dispatch(resetSignUpState())
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
      "본인인증",
      "주소",
      "성별",
      "생년월일",
    ],
    stageContents: [
      <SignUpClause key="clause" />,
      <MSignUpEmailInput key="email" />,
      <MSignUpPasswordInput key="password" />,
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
      !phone,
      !address,
      false,
      !isBirthValid,
      isSignUpLoading,
    ],
    onClickBackButton: handleStageBackClick,
    onClickNextButton: handleStageNextClick,
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
