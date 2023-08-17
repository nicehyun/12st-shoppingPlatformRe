import SignUpFeedback from "../SignUpFeedback"
import SignUpInput from "../SignUpInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpPasswordInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpInput type="password" />
      <SignUpFeedback classNames="ml-0" />
      <SignUpInput type="repassword" classNames="mt-[10px]" />
      <SignUpFeedback classNames="ml-0" />
    </MSignUpInputLayout>
  )
}

export default MSignUpPasswordInput
