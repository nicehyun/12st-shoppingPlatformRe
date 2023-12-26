"use client"

import { ReactNode, useEffect, useState } from "react"
import MoblieMyPageCategoryConroller from "./MoblieMyPageCategoryConroller"

import MyPageNameAndHeart from "./MyPageNameAndHeart"
import MyPageRewards from "./MyPageRewards"
import { useNavigations } from "@/features/common/hooks/useNavigations"

interface IMoblieMyPageLayout {
  children: ReactNode
}

const MoblieMyPageLayout = ({ children }: IMoblieMyPageLayout) => {
  const [isShowCategory, setIsShowCategory] = useState(false)

  const handleCatgoryShow = () => {
    setIsShowCategory(true)
    document.body.style.overflow = "hidden" // 페이지 스크롤 막기
  }

  const handleCatgoryHide = () => {
    setIsShowCategory(false)
    document.body.style.overflow = "auto" // 페이지 스크롤 허용
  }

  return (
    <>
      <MyPageNameAndHeart />
      <MyPageRewards />
      <MoblieMyPageCategoryConroller
        isShowCategory={isShowCategory}
        onHideCatgory={handleCatgoryHide}
        onShowCatgory={handleCatgoryShow}
      />
      {children}
    </>
  )
}

export default MoblieMyPageLayout
