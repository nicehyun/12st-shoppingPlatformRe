"use client"

import { Gender, UserInfo } from "@/common/types/user"
import Stage, { IStage } from "@/common/views/Stage"

import {
  resetSignUpState,
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

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

  // console.log(age)
  // console.log(privacy)
  // console.log(term)
  // console.log(marketing)

  console.log(`email check : ${email}`)
  console.log(`phone check : ${phone}`)
  console.log(`address check : ${address}`)

  console.log(`password check : ${isPasswordValid}`)
  console.log(`birth check : ${isBirthValid}`)

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(`email :  ${formData.get("email")}`)
    console.log(`password :  ${formData.get("password")}`)
    console.log(`address :  ${formData.get("address")}`)
    console.log(`additionalAddress :  ${formData.get("additionalAddress")}`)
    console.log(`gender :  ${formData.get("gender")}`)
    console.log(`year :  ${formData.get("birthYear")}`)

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
      // !email,
      false,
      !isPasswordValid,
      // !phone,
      false,
      !address,
      false,
      !isBirthValid,
    ],
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
      <button>테스트 회원가입 버튼</button>
    </form>
  )
}

export default MSignUpForm
