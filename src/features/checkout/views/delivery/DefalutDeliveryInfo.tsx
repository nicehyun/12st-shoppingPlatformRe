import DeliveryMemoSelect from "./DeliveryMemoSelect"
import DeliveryInfoInputs from "./DeliveryInfoInputs"

const DefalutDeliveryInfo = () => {
  return (
    <>
      <DeliveryInfoInputs />
      <p className="max-w-[500px] ml-[100px] text-[14px] sm:text-[12px] mb-[20px] font-semibold">
        * 기본 배송지입니다. 주문 시 변경하신 내용으로 기본 배송지 주소가
        수정됩니다.
      </p>
      <DeliveryMemoSelect />
    </>
  )
}

export default DefalutDeliveryInfo
