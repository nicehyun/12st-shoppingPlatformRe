import { useEffect } from "react"

import PromotionEl from "./PromotionEl"

import { throttle } from "lodash"
import PromotionButton from "./PromotionButton"

interface IPromotionBar {
  isShowPromotion: boolean
  onShowPromotion: () => void
  onHidePromotion: () => void
  onShowPromotionModal: () => void
}

const PromotionBar = ({
  isShowPromotion,
  onShowPromotion,
  onHidePromotion,
  onShowPromotionModal,
}: IPromotionBar) => {
  const handlePromotionVisibility = () => {
    return window.scrollY > 30 ? onHidePromotion() : onShowPromotion()
  }

  const handleScroll = throttle(handlePromotionVisibility, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <div
        className={`${
          isShowPromotion
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-[-100px]"
        } transition-3`}
      >
        <ul className="flexCenter bg-black text-white dark:bg-white dark:text-black px-7 h-10 sm:hidden md:hidden">
          <PromotionEl
            classNames="mr-10"
            content="[ 신규가입 ] 15% 할인쿠폰"
            highlightedTextStart={8}
            highlightedTextEnd={12}
          />

          <PromotionEl
            classNames="before:vertical-divider before:-mx-5 mr-10"
            content="[ 삼성카드 ] 14만원 캐시백 프로모션"
            highlightedTextStart={9}
            highlightedTextEnd={14}
          />

          <PromotionEl
            classNames="before:vertical-divider before:-mx-5"
            content="[ 카카오페이 ] 5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인"
            highlightedTextStart={27}
            highlightedTextEnd={35}
          />
        </ul>

        <div className="bg-black dark:bg-white hidden sm:block md:block text-center relative">
          <PromotionButton onShow={onShowPromotionModal} />
        </div>
      </div>
    </>
  )
}

export default PromotionBar
