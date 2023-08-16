import PageLayout from "@/common/views/PageLayout"
import SIgnUpClause from "@/features/auth/signUp/views/SIgnUpClause"
import SignUpForm from "@/features/auth/signUp/views/SignUpForm"
import React from "react"

const SignUpPage = () => {
  return (
    <PageLayout>
      <SignUpForm>
        <SIgnUpClause />
      </SignUpForm>
    </PageLayout>
  )
}

export default SignUpPage
