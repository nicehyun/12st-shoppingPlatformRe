import Stage, { IStage } from "@/features/common/views/Stage"
import { selectSignUpStepState } from "@/redux/features/signUpSlice"
import { useAppSelector } from "@/redux/hooks"
import React from "react"
import SignUpClause from "./SIgnUpClause"
import dynamic from "next/dynamic"

interface ISignUpStage {
  isSignUpLoading: boolean
}

const DynamicSignUpPhoneVerificationInput = dynamic(
  () => import("./SignUpPhoneVerificationInput"),
  { ssr: false }
)

const DynamicSignUpEmailInput = dynamic(() => import("./SignUpEmailInput"), {
  ssr: false,
})

const DynamicSignUpNameInput = dynamic(() => import("./SignUpNameInput"), {
  ssr: false,
})
const DynamicSignUpPasswordInput = dynamic(
  () => import("./SignUpPasswordInput"),
  { ssr: false }
)

const SignUpStage = ({ isSignUpLoading }: ISignUpStage) => {
  const signUpStep = useAppSelector(selectSignUpStepState)

  const stageProps: IStage = {
    activeStep: signUpStep,
    stages: ["약관동의", "이메일", "비밀번호", "이름", "본인인증"],
    stageContents: [
      <SignUpClause key="clause" />,
      <DynamicSignUpEmailInput key="email" />,
      <DynamicSignUpPasswordInput key="password" />,
      <DynamicSignUpNameInput key="name" />,
      <DynamicSignUpPhoneVerificationInput
        key="phone"
        isSignUpLoading={isSignUpLoading}
      />,
    ],
  }
  return <Stage {...stageProps} />
}

export default SignUpStage
