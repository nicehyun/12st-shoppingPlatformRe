import { useUserInput } from "@/features/common/hooks/useUserInput"
import Feedback from "@/features/common/views/Feedback"
import Input from "@/features/common/views/Input"
import { passwordValidator } from "../../signUp/utils/validation"

const SignInPasswordInput = () => {
  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
  } = useUserInput(passwordValidator)

  const feedbackContent = hasErrorPassword
    ? "영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
    : ""
  return (
    <>
      <Input
        type="password"
        name="password"
        id="password"
        value={passwordInputValue}
        onChange={handlePasswordInputValueChange}
        onBlur={handlePasswordInputBlur}
        placeholder="비밀번호를 입력해주세요"
        isShowFeedback={hasErrorPassword}
      />

      {hasErrorPassword && (
        <Feedback classNames="h-[16px]" content={feedbackContent} />
      )}
    </>
  )
}

export default SignInPasswordInput
