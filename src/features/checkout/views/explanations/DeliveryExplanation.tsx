const DeliveryExplanation = () => {
  return (
    <ul className="list-disc text-[14px]">
      <li className="mb-[20px]">
        도서산간 지역의 경우 추후 수령 시 추가 배송비가 발생할 수 있으며,
        해외배송은 불가합니다.
      </li>
      <li className="mb-[20px]">
        배송지 불분명 및 수신불가 연락처 기입으로 반송되는 왕복 택배 비용은
        구매자 부담으로 정확한 주소 및 통화 가능한 연락처 필수 기입.
      </li>
      <li>
        대리 주문으로 해외 주소로 발송 전, 주문품 꼭 확인해주세요. 오배송 및
        불량 교환에 따른 배송비는 국내 택배 비용만 지원됩니다.
      </li>
    </ul>
  )
}

export default DeliveryExplanation
