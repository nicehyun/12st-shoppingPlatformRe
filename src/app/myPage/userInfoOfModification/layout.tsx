import SignUpBasicModal from "@/features/auth/signUp/views/SignUpBasicModal"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <SignUpBasicModal />
    </>
  )
}

export default layout
