const CouponExplanation = () => {
  return (
    <ul className="list-disc text-[14px]">
      <li className="mb-[20px]">
        할인쿠폰 제외 상품이 포함되어 있는 경우, 해당 제품을 제외하고 할인이
        적용됩니다.
      </li>
      <li className="mb-[20px]">
        브랜드쿠폰과 보너스쿠폰은 중복사용이 불가능합니다.
      </li>
      <li className="mb-[20px]">
        일부 상품(할인쿠폰제외상품)에는 보너스쿠폰이 적용되지 않습니다.
      </li>
      <li>쿠폰에 따라 최대 쿠폰 사용 금액이 제한될 수 있습니다.</li>
    </ul>
  )
}

export default CouponExplanation
