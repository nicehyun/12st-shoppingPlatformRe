import PageLayout from "@/common/views/PageLayout"
import SignUpBasicModal from "@/features/auth/signUp/views/SignUpBasicModal"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"
import Header from "@/features/layout/views/Header"

const SignUpPage = () => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>
        <SignUpForm />
      </PageLayout>

      <SignUpBasicModal />
    </>
  )
}

export default SignUpPage
