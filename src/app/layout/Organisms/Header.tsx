"use client"

import React, { useState } from "react"
import HeaderLogo from "../Atoms/HeaderLogo"
import HeaderController from "../Molecules/HeaderController"
import PromotionBar from "../Molecules/PromotionBar"

const Header = () => {
  const [isShowPromotion, setIsShowPromotion] = useState(true)

  return (
    <header
      className={`fixed w-full z-10 headerLayout 
      ${isShowPromotion ? "h-[132px]" : "h-[100px]"}
      
      `}
    >
      <PromotionBar
        isShowPromotion={isShowPromotion}
        onShowPromotion={() => setIsShowPromotion(true)}
        onHidePromotion={() => setIsShowPromotion(false)}
      />
      <HeaderLogo isShowPromotion={isShowPromotion} />
      <HeaderController isShowPromotion={isShowPromotion} />
    </header>
  )
}

export default Header
