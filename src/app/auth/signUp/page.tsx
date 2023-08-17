import PageLayout from "@/common/views/PageLayout"
import MSignUpForm from "@/features/auth/signUp/views/mobile/MSignUpForm"
import SIgnUpClause from "@/features/auth/signUp/views/SIgnUpClause"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"
import React from "react"

const SignUpPage = () => {
  return (
    <PageLayout>
      <SignUpForm>
        <SIgnUpClause />
      </SignUpForm>

      <MSignUpForm />
    </PageLayout>
  )
}

export default SignUpPage
