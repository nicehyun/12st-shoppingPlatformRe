import PageLayout from "@/common/views/PageLayout"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"

//TODO : home으로 이동 후 회원가입 이동 시 activeStep 0으로 초기화 안됨

const SignUpPage = () => {
  return (
    <PageLayout>
      <SignUpForm />
    </PageLayout>
  )
}

export default SignUpPage
