import SignUpPasswordInput from "../SignUpPasswordInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

// TODO : isPasswordValid 글로벌로 변경하기
const MSignUpPasswordInput = () => {
  return (
    <MSignUpInputLayout headingText="로그인에 사용할 비밀번호를 입력해주세요">
      <SignUpPasswordInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpPasswordInput
