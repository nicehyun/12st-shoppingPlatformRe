import "tailwindcss/tailwind.css"
import PromotionEl from "../Atoms/PromotionEl"

const PromotionBar = () => {
  return (
    <ul className="flex">
      <PromotionEl content={"12st 신규 가입 15% 할인쿠폰"} />
      <PromotionEl content={"[삼성카드]14만원 캐시백 프로모션"} />
      <PromotionEl
        content={"카카오페이 5/8/20 이상 결제 시 3천/4천/1만 즉시 할인"}
      />
    </ul>
  )
}

export default PromotionBar
