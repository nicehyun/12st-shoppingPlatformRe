import Button from "@/features/common/views/Button"
import { useState } from "react"
import { useGetDefaultDeliveryInfoQuery } from "../hooks/useGetDefaultDeliveryInfoQuery"
import CheckoutAddressInput from "./CheckoutAddressInput"
import CheckoutDeliveryNameInput from "./CheckoutDeliveryNameInput"
import CheckoutPhoneInput from "./CheckoutPhoneInput"
import CheckoutRecipientInput from "./CheckoutRecipientInput"
import DeliveryMemoSelect from "./DeliveryMemoSelect"

const CheckoutDefalutDeliveryInfo = () => {
  const { deliveryInfo } = useGetDefaultDeliveryInfoQuery()
  const [isShowDeliveryInfo, setIsShowDeliveryInfo] = useState(false)

  return (
    <>
      {isShowDeliveryInfo || deliveryInfo ? (
        <>
          <CheckoutDeliveryNameInput
            defaultValue={deliveryInfo?.deliveryName}
          />
          <CheckoutRecipientInput defaultValue={deliveryInfo?.recipient} />
          <CheckoutAddressInput
            defaultValue={{
              zipcode: deliveryInfo?.zipcode,
              address: deliveryInfo?.address,
              additionalAddress: deliveryInfo?.additionalAddress,
            }}
          />
          <CheckoutPhoneInput isRequired defaultValue={deliveryInfo?.phone1} />
          <CheckoutPhoneInput defaultValue={deliveryInfo?.phone2} />
          <p className="max-w-[500px] ml-[100px] text-[14px] sm:text-[12px] mb-[20px] font-semibold">
            * 기본 배송지입니다. 주문 시 변경하신 내용으로 기본 배송지 주소가
            수정됩니다.
          </p>
          <DeliveryMemoSelect />
        </>
      ) : (
        <div className="flexCenter h-[200px]">
          <Button
            onClick={() => setIsShowDeliveryInfo(true)}
            classNames="border-[1px] border-black bg-black text-white text-[18px] md:text-[16px] sm:text-[14px] py-[18px] px-[10px]"
            content="기본 배송지 추가하기"
          />
        </div>
      )}
    </>
  )
}

export default CheckoutDefalutDeliveryInfo
