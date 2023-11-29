import PageLayout from "@/features/common/views/PageLayout"
import SignUpBasicModal from "@/features/auth/signUp/views/SignUpBasicModal"
import Header from "@/features/layout/views/Header"

import { ReactNode } from "react"

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header isShowCart={false} />
      <PageLayout>{children}</PageLayout>

      <SignUpBasicModal />
    </>
  )
}

export default SignUpLayout
