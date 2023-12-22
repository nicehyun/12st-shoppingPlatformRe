import Checkbox from "@/features/common/views/Checkbox"
import { useState } from "react"
import CheckoutAddressInput from "./CheckoutAddressInput"
import CheckoutDeliveryNameInput from "./CheckoutDeliveryNameInput"
import CheckoutPhoneInput from "./CheckoutPhoneInput"
import CheckoutRecipientInput from "./CheckoutRecipientInput"
import DeliveryMemoSelect from "./DeliveryMemoSelect"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"

const dummyDeliveryInfo = {
  deliveryName: "test",
  recipient: "test",
  zipcode: "test",
  address: "test",
  additionalAddress: "test",
  phone1: "test",
  phone2: "test",
}

const CheckoutNewDeliveryInfo = () => {
  const [isDefalutAddressRegistration, setIsDefalutAddressRegistration] =
    useState(false)

  const toggleDefalutAddressRegistration = () => {
    setIsDefalutAddressRegistration((prev) => !prev)
  }

  return (
    <>
      <CheckoutDeliveryNameInput />
      <CheckoutRecipientInput />
      <CheckoutAddressInput />
      <CheckoutPhoneInput isRequired />
      <CheckoutPhoneInput />

      <Checkbox
        id="defalutAddressRegistration"
        isChecked={isDefalutAddressRegistration}
        onClickCheckbox={toggleDefalutAddressRegistration}
        checkboxLabel="기본배송지로 등록하기"
        peer="peer/defalutAddress"
        peerChecked={{
          borderColor: "peer-checked/defalutAddress:after:border-lightRed",
        }}
        classNames="ml-[100px] mb-[20px] max-w-[500px]"
      />

      <DeliveryMemoSelect />
    </>
  )
}

export default CheckoutNewDeliveryInfo
