import "tailwindcss/tailwind.css"
import PromotionEl from "../Atoms/PromotionEl"

const PromotionBar = () => {
  const promotionElvirtualClass =
    "before:absolute before:top-0 before:bottom-0 brfore:content-[''] before:w-px before:h-3.5 before:bg-lightGray before:my-auto before:-mx-5"

  return (
    <ul className="flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-7 h-10">
      <PromotionEl
        classnames="mr-10"
        content="[ 신규가입 ] 15% 할인쿠폰"
        highlightedTextStart={8}
        highlightedTextEnd={12}
      />

      <PromotionEl
        classnames={`${promotionElvirtualClass} mr-10`}
        content="[ 삼성카드 ] 14만원 캐시백 프로모션"
        highlightedTextStart={9}
        highlightedTextEnd={14}
      />

      <PromotionEl
        classnames={`${promotionElvirtualClass}`}
        content="[ 카카오페이 ] 5 / 8 / 20이상 결제시 3천/4천/1만 즉시 할인 할인쿠폰"
        highlightedTextStart={27}
        highlightedTextEnd={35}
      />
    </ul>
  )
}

export default PromotionBar
