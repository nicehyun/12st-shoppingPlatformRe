"use client"
import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import Input from "@/common/views/Input"
import Loading from "@/common/views/Loading"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useUserInput } from "../../../../common/hooks/useUserInput"
import {
  emailValidator,
  passwordValidator,
} from "../../signUp/utils/validation"
import Feedback from "../../../../common/views/Feedback"
import useSignInMutaion from "../hooks/useSIgnInMutaion"
import Button from "@/common/views/Button"

const SignInForm = () => {
  const { routeTo } = useNavigations()
  const dispatch = useAppDispatch()

  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset: resetEmail,
  } = useUserInput(emailValidator)

  const {
    value: passwordInputValue,
    handleValueChange: handlePasswordInputValueChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: hasErrorPassword,
    isValid: isPasswordValid,
    reset: resetPassword,
  } = useUserInput(passwordValidator)

  const { isLoading: isSignInLoading, mutateAsync: signInMutateAsync } =
    useSignInMutaion()

  const testSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isEmailValid || !isPasswordValid || isSignInLoading) return

    const signInRes = await signInMutateAsync({
      email: emailInputValue,
      password: passwordInputValue,
    })

    if (signInRes?.error) {
      return dispatch(
        showFeedbackModal({
          modalContent: "아이디와 비밀번호를 확인해주세요.",
        })
      )
    }

    routeTo(ROUTE.HOME)
  }

  const feedbackContent = hasErrorEmail
    ? "이메일 형식을 입력해주세요."
    : hasErrorPassword
    ? "영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
    : ""
  return (
    <form onSubmit={testSubmit} className={`flexCenter flex-col mb-[50px]`}>
      <h2 className="w-[400px] text-center text-[24px] md:text-[20px] sm:text-[18px] font-extrabold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        LOGIN
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

      <Button
        type="submit"
        classNames="w-[400px] text-[14px] tracking-[8px] h-[50px] bg-black dark:bg-white dark:text-black text-white"
        content={
          isSignInLoading ? (
            <Loading
              spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
              isFrame={false}
            />
          ) : (
            "로그인"
          )
        }
      />

      <Feedback classNames="h-[16px]" content={feedbackContent} />
    </form>
  )
}

export default SignInForm
