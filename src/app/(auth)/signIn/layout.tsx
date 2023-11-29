import PageLayout from "@/features/common/views/PageLayout"

import { ReactNode } from "react"

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return <PageLayout>{children}</PageLayout>
}

export default SignInLayout
