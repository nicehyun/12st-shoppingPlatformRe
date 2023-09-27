import { useState } from "react"
import { useGetAddressQuery } from "../hooks/useGetAddressQuery"
import CheckoutAddressInput from "./CheckoutAddressInput"
import CheckoutDeliveryNameInput from "./CheckoutDeliveryNameInput"
import CheckoutPhoneInput from "./CheckoutPhoneInput"
import CheckoutRecipientInput from "./CheckoutRecipientInput"
import DeliveryMemoSelect from "./DeliveryMemoSelect"

const CheckoutDefalutDeliveryInfo = () => {
  const { userDefalutAddress } = useGetAddressQuery()
  const [isShowDeliveryInfo, setIsShowDeliveryInfo] = useState(false)

  return (
    <>
      {isShowDeliveryInfo || userDefalutAddress ? (
        <>
          <CheckoutDeliveryNameInput
            defaultValue={userDefalutAddress?.delivertName}
          />
          <CheckoutRecipientInput
            defaultValue={userDefalutAddress?.recipient}
          />
          <CheckoutAddressInput
            defaultValue={{
              zipcode: userDefalutAddress?.zipcode,
              address: userDefalutAddress?.address,
              additionalAddress: userDefalutAddress?.additionalAddress,
            }}
          />
          <CheckoutPhoneInput
            isRequired
            defaultValue={userDefalutAddress?.phone1}
          />
          <CheckoutPhoneInput defaultValue={userDefalutAddress?.phone2} />
          <p className="max-w-[500px] ml-[100px] text-[14px] sm:text-[12px] mb-[20px] font-semibold">
            * 기본 배송지입니다. 주문 시 변경하신 내용으로 기본 배송지 주소가
            수정됩니다.
          </p>
          <DeliveryMemoSelect />
        </>
      ) : (
        <div className="flexCenter h-[200px]">
          <button
            type="button"
            onClick={() => setIsShowDeliveryInfo(true)}
            className="border-[1px] border-black bg-black text-white text-[18px] md:text-[16px] sm:text-[14px] py-[18px] px-[10px]"
          >
            기본 배송지 추가하기
          </button>
        </div>
      )}
    </>
  )
}

export default CheckoutDefalutDeliveryInfo
