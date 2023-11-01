import MyPageBasicModal from "@/features/myPage/views/MyPageBasicModal"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <MyPageBasicModal />
    </>
  )
}

export default layout
