import PageLayout from "@/common/views/PageLayout"
import SignInController from "@/features/auth/signIn/views/SignInController"
import SignInForm from "@/features/auth/signIn/views/SignInForm"

const SignInPage = () => {
  return (
    <PageLayout>
      <SignInForm />
      <SignInController />
    </PageLayout>
  )
}

export default SignInPage
