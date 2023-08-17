import Input, { InputType } from "@/common/views/Input"

type UserInputType = "password" | "repassword" | "name"

interface ISignUpInput {
  type: UserInputType
  classNames?: string
}

const SignUpInput = ({ type, classNames }: ISignUpInput) => {
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
    />
  )
}

export default SignUpInput
