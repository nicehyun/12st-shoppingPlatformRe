"use client"

import Input, { InputType } from "@/features/common/views/Input"
import PasswordToggleIcon from "@/features/common/views/PasswordToggleIcon"
import { ChangeEvent, useState } from "react"

type UserInputId = "signUp-password" | "signUp-repassword" | "signUp-name"

interface ISignUpInput {
  id: UserInputId
  classNames?: string
  inputValue: string
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
  onBlurInput: () => void
  isShowFeedback: boolean
}

const SignUpInput = ({
  id,
  classNames,
  inputValue,
  isShowFeedback,
  onBlurInput,
  onChangeInputValue,
}: ISignUpInput) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleShowPassword = () => {
    setIsShowPassword(true)
  }

  const handleHidePassword = () => {
    setIsShowPassword(false)
  }

  let inputType: InputType = "text",
    placeholder = ""

  switch (id) {
    case "signUp-password":
      inputType = "password"
      placeholder = "비밀번호를 입력해주세요"
      break
    case "signUp-repassword":
      inputType = "password"
      placeholder = "비밀번호를 한번 더 입력해주세요"
      break
    case "signUp-name":
      placeholder = "이름을 입력해주세요"
      break
    default:
      break
  }

  return (
    <Input
      type={isShowPassword ? "text" : inputType}
      name={id}
      id={id}
      placeholder={placeholder}
      classNames={`${classNames} flex-grow w-full`}
      value={inputValue}
      onBlur={onBlurInput}
      onChange={onChangeInputValue}
      isShowFeedback={isShowFeedback}
    >
      {(id === "signUp-password" || id === "signUp-repassword") && (
        <PasswordToggleIcon
          isShowPassword={isShowPassword}
          onShowPassword={handleShowPassword}
          onHidePassword={handleHidePassword}
        />
      )}
    </Input>
  )
}

export default SignUpInput
