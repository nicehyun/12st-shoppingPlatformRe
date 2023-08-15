"use client"

import Input, { InputType } from "@/common/views/Input"
import SignUpSideButton from "@/common/views/SignUpSideButton"
import Timer from "@/common/views/TImer"

type UserInputType = "email" | "phone" | "verificationPhone"

// TODO : isChecked, isLoading, onClick, disabled 타입 수정(?)

interface ISignUpVerificationInput {
  type: UserInputType
  isChecked?: boolean
  isLoading?: boolean
  onClick?: () => void
  isDisabledButton: boolean
}

// TODO : 버튼 disabled 할지 모달로 피드백 할지 고민하기
const SignUpVerificationInput = ({
  type,
  isChecked,
  isLoading,
  isDisabledButton,
  onClick,
}: ISignUpVerificationInput) => {
  let inputType: InputType = "text",
    placeholder = "",
    preVerificationButtonText = "",
    verifiedButtonContent = ""

  switch (type) {
    case "email":
      placeholder = "twelve12@twelve.com"
      preVerificationButtonText = "중복확인"
      verifiedButtonContent = "확인완료"
      break
    case "phone":
      inputType = "tel"
      placeholder = "숫자만 입력해주세요"
      preVerificationButtonText = "인증하기"
      verifiedButtonContent = "인증완료"
      break

    case "verificationPhone":
      placeholder = "인증번호를 입력해주세요"
      preVerificationButtonText = "인증"
      verifiedButtonContent = "인증"
      break
    default:
      break
  }
  const test = () => {
    console.log(test)
  }

  return (
    <>
      <Input
        type={inputType}
        name={type}
        id={type}
        placeholder={placeholder}
        classNames="flex-grow"
        maxLength={6}
      >
        {type === "verificationPhone" && (
          <Timer
            seconds={300}
            onTimeExpire={() => test()}
            position={{ top: "top-[9px]", right: "right-[15px]" }}
          />
        )}
      </Input>

      <SignUpSideButton
        classNames={`ml-[10px]`}
        onClick={onClick}
        isDisabled={isDisabledButton}
        content={
          isLoading ? (
            <span>로딩</span>
          ) : isChecked ? (
            verifiedButtonContent
          ) : (
            preVerificationButtonText
          )
        }
      />
    </>
  )
}

export default SignUpVerificationInput
