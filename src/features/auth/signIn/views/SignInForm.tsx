"use client"
import Input from "@/common/views/Input"
import { signIn, signOut, useSession } from "next-auth/react"
import { useSignUpUserInput } from "../../signUp/hooks/useSignUpUserInput"
import {
  emailValidator,
  passwordValidator,
} from "../../signUp/utils/validation"
import SignUpFeedback from "../../signUp/views/SignUpFeedback"

const SignInForm = () => {
  const { data: session } = useSession()

  console.log(session)
  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset: resetEmail,
  } = useSignUpUserInput(emailValidator)

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
    reset: resetPassword,
  } = useSignUpUserInput(passwordValidator)

  const testSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // if (!isEmailValid || !isPasswordValid) return

    // const formData = new FormData(event.currentTarget)

    // const response = await fetch("/api/auth/signIn", {
    //   method: "POST",
    //   body: formData,
    // })

    // console.log(response.ok)
    const res = await signIn("user-credentials", {
      email: emailInputValue,
      password: passwordInputValue,
      redirect: false,
      // redirect: true,
      // callbackUrl: "/",
    })

    console.log(res)

    // signIn()
  }

  const feedbackContent = hasErrorEmail
    ? "이메일 형식을 입력해주세요."
    : hasErrorPassword
    ? "영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
    : ""
  return (
    <form onSubmit={testSubmit} className={`flexCenter flex-col mb-[50px]`}>
      <h2 className="w-[400px] text-center text-[20px] font-bold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        로그인
      </h2>

      <div className="w-[400px] mb-[10px]">
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
      </div>

      <div className="w-[400px] mb-[20px]">
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
      </div>

      <button
        type="submit"
        className="w-[400px] text-[14px] tracking-[8px] h-[50px] bg-black text-white"
      >
        {/* {isLoginLoading ? (
          <LoadingView spinnerSize="20px" isFrame={false} />
        ) : (
          "로그인"
        )} */}
        로그인
      </button>

      <SignUpFeedback classNames="h-[16px]" content={feedbackContent} />
    </form>
  )
}

export default SignInForm
