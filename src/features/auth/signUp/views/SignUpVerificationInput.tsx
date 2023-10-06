"use client"

import Input, { InputType } from "@/common/views/Input"
import SignUpSideButton from "@/features/auth/signUp/views/SignUpSideButton"
import Timer from "@/common/views/TImer"
import { ChangeEvent } from "react"
import Loading from "@/common/views/Loading"

type UserInputType = "email" | "phone" | "verificationPhone"

interface ISignUpVerificationInput {
  type: UserInputType
  isChecked?: boolean
  isLoading: boolean
  inputValue: string
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
  onClickVerificationButton: () => void
  onBlurInput?: () => void
  isDisabledButton: boolean
  classNames?: string
  isShowFeedback?: boolean
  isReadOnly?: boolean
}

const SignUpVerificationInput = ({
  type,
  isChecked,
  isLoading,
  isDisabledButton,
  inputValue,
  onChangeInputValue,
  onClickVerificationButton,
  onBlurInput,
  classNames,
  isShowFeedback,
  isReadOnly,
}: ISignUpVerificationInput) => {
  console.log(isChecked)
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
      placeholder = "휴대폰 번호는 숫자만 입력해주세요"
      preVerificationButtonText = "인증하기"
      verifiedButtonContent = "인증완료"
      break

    case "verificationPhone":
      placeholder = "인증번호 6자리를 입력해주세요"
      preVerificationButtonText = "인증"
      verifiedButtonContent = "인증"
      break
    default:
      break
  }

  // TODO : Time 함수 수정
  const test = () => {
    console.log("test")
  }

  return (
    <div className={`${classNames} flex flex-grow`}>
      <Input
        type={inputType}
        name={type}
        id={type}
        placeholder={placeholder}
        classNames="flex-grow"
        maxLength={type === "verificationPhone" ? 6 : undefined}
        value={inputValue}
        onChange={onChangeInputValue}
        onBlur={onBlurInput}
        isShowFeedback={isShowFeedback}
        isReadOnly={isReadOnly}
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
        onClick={onClickVerificationButton}
        isDisabled={isDisabledButton}
        content={
          isLoading ? (
            <Loading
              spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
              isFrame={false}
            />
          ) : isChecked ? (
            verifiedButtonContent
          ) : (
            preVerificationButtonText
          )
        }
      />
    </div>
  )
}

export default SignUpVerificationInput
