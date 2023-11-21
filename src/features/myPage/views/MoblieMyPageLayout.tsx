import { ReactNode } from "react"
import MoblieMyPageCategoryConroller from "./MoblieMyPageCategoryConroller"

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
      <MoblieMyPageCategoryConroller />
      {children}
    </>
  )
}

export default MoblieMyPageLayout
