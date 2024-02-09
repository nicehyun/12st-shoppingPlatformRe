"use client"

import { ReactNode, useState } from "react"
import MoblieMyPageCategoryConroller from "./MoblieMyPageCategoryConroller"
import MyPageNameAndHeart from "./NameAndHeart"
import MyPageRewards from "./MyPageRewards"

interface IMoblieMyPageLayout {
  children: ReactNode
}

const MoblieMyPageLayout = ({ children }: IMoblieMyPageLayout) => {
  const [isShowCategory, setIsShowCategory] = useState(false)

  const handleCatgoryShow = () => {
    setIsShowCategory(true)
    document.body.style.overflow = "hidden"
  }

  const handleCatgoryHide = () => {
    setIsShowCategory(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="lg:hidden xl:hidden lg:opacity-0 xl:opacity-0">
      <MyPageNameAndHeart />
      <MyPageRewards />
      <MoblieMyPageCategoryConroller
        isShowCategory={isShowCategory}
        onHideCatgory={handleCatgoryHide}
        onShowCatgory={handleCatgoryShow}
      />

      {children}
    </div>
  )
}

export default MoblieMyPageLayout
