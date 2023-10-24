import { ReactNode } from "react"
import MyPageCategory from "./MyPageCategory"
import MyPageNameAndHeart from "./MyPageNameAndHeart"
import MyPageRewards from "./MyPageRewards"

interface IMoblieMyPageLayout {
  children: ReactNode
}

const MoblieMyPageLayout = ({ children }: IMoblieMyPageLayout) => {
  return (
    <>
      <MyPageNameAndHeart />
      <MyPageRewards />
      <MyPageCategory />

      {children}
    </>
  )
}

export default MoblieMyPageLayout
