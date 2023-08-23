import PageLayout from "@/common/views/PageLayout"
import MSignUpForm from "@/features/auth/signUp/views/mobile/MSignUpForm"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"

import React from "react"

const SignUpPage = () => {
  return (
    <PageLayout>
      <SignUpForm />

      <MSignUpForm />
    </PageLayout>
  )
}

export default SignUpPage
