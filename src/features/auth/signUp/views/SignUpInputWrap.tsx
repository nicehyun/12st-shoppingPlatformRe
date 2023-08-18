import { ReactNode } from "react"

type UserInputType =
  | "email"
  | "password"
  | "repassword"
  | "name"
  | "phone"
  | "address"
  | "gender"
  | "birth"
  | "verificationPhone"

interface ISignUpInputWrap {
  htmlFor: UserInputType
  userInputComponent: ReactNode
  feedbackComponent?: ReactNode
  classNames?: string
}

const SignUpInputWrap = ({
  htmlFor,
  classNames,
  userInputComponent,
  feedbackComponent,
}: ISignUpInputWrap) => {
  let labelText = ""

  switch (htmlFor) {
    case "email":
      labelText = "이메일"
      break
    case "password":
      labelText = "비밀번호"
      break
    case "repassword":
      labelText = "비밀번호 확인"
      break
    case "name":
      labelText = "이름"
      break
    case "phone":
      labelText = "휴대폰"
      break
    case "gender":
      labelText = "성별"
      break
    case "address":
      labelText = "주소"
      break
    case "birth":
      labelText = "생년월일"
      break
    default:
      break
  }

  return (
    <>
      <div
        className={`${classNames} relative mt-[18px] flex items-center text-[14px]`}
      >
        <label htmlFor={htmlFor} className="inline-block w-[139px] font-bold">
          {labelText}
          <span className="text-lightRed ml-[5px]">*</span>
        </label>
        {userInputComponent}
      </div>

      {feedbackComponent}
    </>
  )
}

export default SignUpInputWrap
