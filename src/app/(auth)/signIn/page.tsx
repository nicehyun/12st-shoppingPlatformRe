import SignInController from "@/features/auth/signIn/views/SignInController"
import SignInForm from "@/features/auth/signIn/views/SignInForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "로그인 - 쇼핑 플랫폼 12ST",
}

const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <SignInController />
    </>
  )
}

export default SignInPage
