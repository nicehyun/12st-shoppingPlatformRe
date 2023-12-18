"use client"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Loading from "@/features/common/views/Loading"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import {
  emailValidator,
  passwordValidator,
} from "../../signUp/utils/validation"
import useSignInMutaion from "../hooks/useSIgnInMutaion"
import Button from "@/features/common/views/Button"
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import SignInEmailInput from "./SignInEmailInput"
import SignInPasswordInput from "./SignInPasswordInput"
import { signIn } from "@/redux/features/signInSlice"

const SignInForm = () => {
  const { routeTo } = useNavigations()
  const dispatch = useAppDispatch()

  const { isLoading: isSignInLoading, mutateAsync: signInMutateAsync } =
    useSignInMutaion()

  const handleSignInSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const emailValue = formData.get("email") as string
    const passwordValue = formData.get("password") as string

    const isEmailValid = emailValidator(emailValue)
    const isPasswordValid = passwordValidator(passwordValue)

    if (!isEmailValid || !isPasswordValid || isSignInLoading) return

    const response = await signInMutateAsync({
      email: emailValue,
      password: passwordValue,
    })

    if (response?.status === 500 || response?.status === undefined) {
      return dispatch(
        showFeedbackModal({
          modalContent: "오류가 계속되면 고객센터에 문의해주세요",
        })
      )
    }

    if (response?.status >= 400 && response?.status < 500) {
      return dispatch(
        showFeedbackModal({
          modalContent: "아이디와 비밀번호를 확인해주세요.",
        })
      )
    }

    dispatch(signIn())
    routeTo(ROUTE.HOME)
  }

  return (
    <form
      onSubmit={handleSignInSubmit}
      className={`flexCenter flex-col mb-[50px]`}
    >
      <Button
        content={<FaRegArrowAltCircleLeft />}
        onClick={() => routeTo(ROUTE.HOME)}
        classNames="absolute top-[50px] left-[50px] text-[30px] hover:text-lightRed"
      />

      <h2 className="w-[400px] text-center text-[24px] md:text-[20px] sm:text-[18px] font-extrabold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        LOGIN
      </h2>

      <div className="w-[400px] mb-[10px]">
        <SignInEmailInput />
      </div>

      <div className="w-[400px] mb-[20px]">
        <SignInPasswordInput />
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
    </form>
  )
}

export default SignInForm
