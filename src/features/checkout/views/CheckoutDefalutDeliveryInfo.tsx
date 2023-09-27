import { useGetAddressQuery } from "../hooks/useGetAddressQuery"
import CheckoutAddressInput from "./CheckoutAddressInput"
import CheckoutDeliveryNameInput from "./CheckoutDeliveryNameInput"
import CheckoutPhoneInput from "./CheckoutPhoneInput"
import CheckoutRecipientInput from "./CheckoutRecipientInput"
import DeliveryMemoSelect from "./DeliveryMemoSelect"

const CheckoutDefalutDeliveryInfo = () => {
  const { userDefalutAddress } = useGetAddressQuery()

  return (
    <>
      <CheckoutDeliveryNameInput defaultValue="test" />
      <CheckoutRecipientInput defaultValue="수령인" />
      <CheckoutAddressInput
        defaultValue={{
          zipcode: userDefalutAddress?.zipcode,
          address: userDefalutAddress?.address,
          additionalAddress: userDefalutAddress?.additionalAddress,
        }}
      />
      <CheckoutPhoneInput isRequired defaultValue="01012341234" />
      <CheckoutPhoneInput defaultValue="01012341234" />

      <p className="max-w-[500px] ml-[100px] text-[14px] sm:text-[12px] mb-[20px] font-semibold">
        * 기본 배송지입니다. 주문 시 변경하신 내용으로 기본 배송지 주소가
        수정됩니다.
      </p>

      <DeliveryMemoSelect />
    </>
  )
}

export default CheckoutDefalutDeliveryInfo
