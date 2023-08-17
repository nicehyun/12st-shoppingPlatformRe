"use client"

import { useState } from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderController from "./HeaderController"
import PromotionBar from "./PromotionBar"
import MPromotionModal from "./mobile/MPromotionModal"
import ThemeSwich from "./ThemeSwich"
import HeaderSearchForm from "./HeaderSearchForm"

const Header = () => {
  const [isShowPromotion, setIsShowPromotion] = useState(true)
  const [isShowPromotionModal, setIsShowPromotionModal] = useState(false)

  return (
    <header
      className={`fixed w-full z-10 backdrop-blur-[16px] border-b-[1px] border-black dark:border-white transition-5
      ${isShowPromotion ? "h-[132px]" : "h-[100px]"}
      `}
    >
      <PromotionBar
        isShowPromotion={isShowPromotion}
        onShowPromotion={() => setIsShowPromotion(true)}
        onHidePromotion={() => setIsShowPromotion(false)}
        onShowPromotionModal={() => setIsShowPromotionModal(true)}
      />
      <HeaderLogo isShowPromotion={isShowPromotion} />
      <HeaderController isShowPromotion={isShowPromotion} />

      <ThemeSwich />

      <HeaderSearchForm />

      <MPromotionModal
        isShow={isShowPromotionModal}
        onHide={() => setIsShowPromotionModal(false)}
      />
    </header>
  )
}

export default Header
