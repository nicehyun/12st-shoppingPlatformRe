import SignUpEmailInput from "../SignUpEmailInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

// TODO : isEmailValid 글로벌로 변경하기
const MSignUpEmailInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 이메일을 입력해주세요">
      <SignUpEmailInput />
    </MSignUpInputLayout>
  )
}

export default MSignUpEmailInput
