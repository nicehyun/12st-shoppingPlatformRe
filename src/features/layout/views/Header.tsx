"use client"

import { useState } from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderController from "./HeaderController"
import PromotionBar from "./PromotionBar"
import PromotionModal from "./PromotionModal"
import SearchDialog from "./SearchDialog"
import ThemeSwich from "./ThemeSwich"

const Header = () => {
  const [isShowPromotion, setIsShowPromotion] = useState(true)
  const [isShowPromotionModal, setIsShowPromotionModal] = useState(false)
  const [isShowSearchDialog, setIsShowSearchDialog] = useState(false)

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
      <HeaderController
        isShowPromotion={isShowPromotion}
        onShowSearchDialog={() => setIsShowSearchDialog(true)}
      />

      <ThemeSwich />

      <PromotionModal
        isShow={isShowPromotionModal}
        onHide={() => setIsShowPromotionModal(false)}
      />

      <SearchDialog
        isShow={isShowSearchDialog}
        onHide={() => setIsShowSearchDialog(false)}
      />
    </header>
  )
}

export default Header
