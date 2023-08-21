import Input, { InputType } from "@/common/views/Input"
import { ChangeEvent } from "react"

type UserInputType = "password" | "repassword" | "name"

interface ISignUpInput {
  type: UserInputType
  classNames?: string
  inputValue: string
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
  onBlurInput: () => void
  isShowFeedback: boolean
}

const SignUpInput = ({
  type,
  classNames,
  inputValue,
  isShowFeedback,
  onBlurInput,
  onChangeInputValue,
}: ISignUpInput) => {
  let inputType: InputType = "text",
    placeholder = ""

  switch (type) {
    case "password":
      inputType = "password"
      placeholder = "비밀번호를 입력해주세요"
      break
    case "repassword":
      inputType = "password"
      placeholder = "비밀번호를 한번 더 입력해주세요"
      break
    case "name":
      placeholder = "이름을 입력해주세요"
      break
    default:
      break
  }
  return (
    <Input
      type={inputType}
      name={type}
      id={type}
      placeholder={placeholder}
      classNames={`${classNames} flex-grow`}
      value={inputValue}
      onBlur={onBlurInput}
      onChange={onChangeInputValue}
    />
  )
}

export default SignUpInput
