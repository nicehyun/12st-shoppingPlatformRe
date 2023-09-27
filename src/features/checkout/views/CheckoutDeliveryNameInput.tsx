import { ChangeEvent, useEffect, useState } from "react"
import CheckoutInputLayout from "./CheckoutInputLayout"

interface ICheckoutDeliveryNameInput {
  defaultValue?: string | null
}

const CheckoutDeliveryNameInput = ({
  defaultValue,
}: ICheckoutDeliveryNameInput) => {
  const [deliveryName, setDeliveryName] = useState("")

  const handleDeliveryNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeliveryName(event.target.value)
  }

  useEffect(() => {
    if (defaultValue) setDeliveryName(defaultValue)
  }, [defaultValue])
  return (
    <CheckoutInputLayout
      label="배송지명"
      id="deliveryName"
      inputMaxLength={15}
      inputState={{
        value: deliveryName,
        handleValueChange: handleDeliveryNameChange,
      }}
    />
  )
}

export default CheckoutDeliveryNameInput
