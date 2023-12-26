"use client"

import { useState } from "react"
import HeaderLogo from "./HeaderLogo"
import HeaderController from "./HeaderController"
import PromotionBar from "./PromotionBar"
import MPromotionModal from "./mobile/MPromotionModal"
import HeaderSearchForm from "./HeaderSearchForm"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useGetCategoriesQuery } from "../hooks/useGetCategoriesQuery"

interface IHeader {
  isShowCart: boolean
}

const Header = ({ isShowCart }: IHeader) => {
  const [isShowPromotion, setIsShowPromotion] = useState(true)
  const [isShowPromotionModal, setIsShowPromotionModal] = useState(false)
  const [isShowSeachForm, setIsShowSearchForm] = useState(false)
  useGetCategoriesQuery()

  const handleSearchFormShow = () => {
    setIsShowSearchForm(true)
  }

  const handleSearchFormHide = () => {
    setIsShowSearchForm(false)
  }

  const { sessionQuery } = useSessionQuery()
  const isSignIn = !!sessionQuery?.user ?? false

  const isShowCartController = isSignIn && isShowCart

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-[16px] border-b-[1px] border-black dark:border-white transition-5
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
        isShowCart={isShowCartController}
        onShowSearchForm={handleSearchFormShow}
      />

      {isShowSeachForm && (
        <HeaderSearchForm onHideSearchForm={handleSearchFormHide} />
      )}

      <MPromotionModal
        isShow={isShowPromotionModal}
        onHide={() => setIsShowPromotionModal(false)}
      />
    </header>
  )
}

export default Header
