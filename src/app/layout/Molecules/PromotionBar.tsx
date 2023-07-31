import "tailwindcss/tailwind.css"
import { useEffect, useRef, useState } from "react"
import PromotionButton from "../Atoms/PromotionButton"
import PromotionEl from "../Atoms/PromotionEl"
import PromotionModal from "../Organisms/PromotionModal"
import { throttle } from "lodash"

import { setupAnimationTransform } from "@/common/utils/animation"

interface IPromotionBar {
  isShowPromotion: boolean
  onShowPromotion: () => void
  onHidePromotion: () => void
}

const PromotionBar = ({
  isShowPromotion,
  onHidePromotion,
  onShowPromotion,
}: IPromotionBar) => {
  const promotionRef = useRef<HTMLDivElement>(null)

  const handlePromotionVisibility = () => {
    return window.scrollY > 30 ? onShowPromotion() : onHidePromotion()
  }

  const handleScroll = throttle(handlePromotionVisibility, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isShowPromotion) {
      setupAnimationTransform(promotionRef, "Y", -100, 1, "block", "visible")
    } else {
      setupAnimationTransform(promotionRef, "Y", 0, 1, "block", "visible")
    }
  }, [isShowPromotion])

  const [isShowPromotionModal, setIsShowPromotionModal] = useState(false)

  const promotionElVirtualClass =
    "before:absolute before:top-0 before:bottom-0 brfore:content-[''] before:w-px before:h-3.5 before:bg-lightGray before:my-auto before:-mx-5"

  return (
    <>
      <div ref={promotionRef}>
        <ul className="flexCenter bg-black text-white dark:bg-white dark:text-black px-7 h-10 sm:hidden md:hidden">
          <PromotionEl
            classNames="mr-10"
            content="[ 신규가입 ] 15% 할인쿠폰"
            highlightedTextStart={8}
            highlightedTextEnd={12}
          />

          <PromotionEl
            classNames={`${promotionElVirtualClass} mr-10`}
            content="[ 삼성카드 ] 14만원 캐시백 프로모션"
            highlightedTextStart={9}
            highlightedTextEnd={14}
          />

          <PromotionEl
            classNames={`${promotionElVirtualClass}`}
            content="[ 카카오페이 ] 5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인"
            highlightedTextStart={27}
            highlightedTextEnd={35}
          />
        </ul>

        <div className="bg-black dark:bg-white hidden sm:block md:block text-center relative">
          <PromotionButton onShow={() => setIsShowPromotionModal(true)} />
        </div>
      </div>

      <PromotionModal
        isShow={isShowPromotionModal}
        onHide={() => setIsShowPromotionModal(false)}
      />
    </>
  )
}

export default PromotionBar
