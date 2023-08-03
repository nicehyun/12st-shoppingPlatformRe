"use client"

import { useState } from "react"
import HeaderLogo from "../Atoms/HeaderLogo"
import HeaderController from "../Molecules/HeaderController"
import PromotionBar from "../Molecules/PromotionBar"
import PromotionModal from "./PromotionModal"
import SearchDialog from "./SearchDialog"

const Header = () => {
  const [isShowPromotion, setIsShowPromotion] = useState(true)
  const [isShowSearchDialog, setIsShowSearchDialog] = useState(false)
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
      <HeaderController
        isShowPromotion={isShowPromotion}
        onShowSearchDialog={() => setIsShowSearchDialog(true)}
      />

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
