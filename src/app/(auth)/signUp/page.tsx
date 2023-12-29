import SignUpForm from "@/features/auth/signUp/views/SignUpForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "회원가입 - 쇼핑 플랫폼 12ST",
}

const SignUpPage = () => {
  return <SignUpForm />
}

export default SignUpPage
