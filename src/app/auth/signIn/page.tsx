import SignInController from "@/features/auth/signIn/views/SignInController"
import SignInForm from "@/features/auth/signIn/views/SignInForm"

const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <SignInController />
    </>
  )
}

export default SignInPage
