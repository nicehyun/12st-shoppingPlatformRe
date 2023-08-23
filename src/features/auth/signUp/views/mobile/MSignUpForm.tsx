"use client"

import Stage, { IStage } from "@/common/views/Stage"

import {
  resetSignUpState,
  selectSignUpCheckState,
  seletSignUpClauseState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

import SignUpClause from "../SIgnUpClause"
import MSignUpAddressInput from "./MSignUpAddressInput"

import MSignUpBirthInput from "./MSignUpBirthInput"
import MSignUpEmailInput from "./MSignUpEmailInput"
import MSignUpGenderInput from "./MSignUpGenderInput"

import MSignUpPasswordInput from "./MSignUpPasswordInput"
import MSignUpPhoneVerificationInput from "./MSignUpPhoneVerificationInput"

const MSignUpForm = () => {
  const dispatch = useAppDispatch()

  const { age, privacy, term } = useAppSelector(seletSignUpClauseState)
  const { email, address, phone } = useAppSelector(selectSignUpCheckState)

  console.log(`email check : ${email}`)
  console.log(`phone check : ${phone}`)
  console.log(`address check : ${address}`)

  const handletestSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(`email :  ${formData.get("email")}`)
    console.log(`password :  ${formData.get("password")}`)
    console.log(`address :  ${formData.get("address")}`)
    console.log(`additionalAddress :  ${formData.get("additionalAddress")}`)
    console.log(`gender :  ${formData.get("gender")}`)
    console.log(`year :  ${formData.get("birthYear")}`)
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
      // !age || !privacy || !term,
      // !isEmailValid || !email,
      // !isPasswordValid || !isRepasswordValid,
      // !isPhoneValid || !phone,
      // !isAdditionalAddressValid,
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
