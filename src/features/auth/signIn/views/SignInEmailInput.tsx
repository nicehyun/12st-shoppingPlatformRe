import { useUserInput } from "@/features/common/hooks/useUserInput"
import Feedback from "@/features/common/views/Feedback"
import Input from "@/features/common/views/Input"
import { emailValidator } from "../../signUp/utils/validation"

const SignInEmailInput = () => {
  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
  } = useUserInput(emailValidator)

  const feedbackContent = hasErrorEmail ? "이메일 형식을 입력해주세요." : ""
  return (
    <>
      <Input
        type="text"
        name="email"
        id="email"
        value={emailInputValue}
        onChange={handleEmailInputValueChange}
        onBlur={handleEmailInputBlur}
        placeholder="이메일을 입력해주세요"
        isShowFeedback={hasErrorEmail}
      />

      {hasErrorEmail && (
        <Feedback classNames="h-[16px]" content={feedbackContent} />
      )}
    </>
  )
}

export default SignInEmailInput
