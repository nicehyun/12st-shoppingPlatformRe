import PageLayout from "@/common/views/PageLayout"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"
import SIgnUpUserInfo from "@/features/auth/signUp/views/SIgnUpUserInfo"
import React from "react"

const SignUpPage = () => {
  return (
    <PageLayout>
      <SignUpForm />
    </PageLayout>
  )
}

export default SignUpPage
