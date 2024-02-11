import SignUpBasicModal from "@/features/auth/signUp/views/SignUpBasicModal"
import MemberTerminataionModal from "@/features/myPage/views/motificationOfUserInfo/MemberTerminataionModal"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <SignUpBasicModal />
      <MemberTerminataionModal />
    </>
  )
}

export default layout
