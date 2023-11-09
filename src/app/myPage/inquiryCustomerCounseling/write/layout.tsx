import MyPageBasicModal from "@/features/myPage/views/MyPageBasicModal"
import { ReactNode } from "react"

const WriteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <MyPageBasicModal />
    </>
  )
}

export default WriteLayout
