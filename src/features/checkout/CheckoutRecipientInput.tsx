import Input from "@/common/views/Input"
import React from "react"
import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutRecipientInput = () => {
  return (
    <CheckoutInputLayout label="수령인" id="recipient" isRequired>
      <Input
        id="recipient"
        name="recipient"
        type="text"
        classNames="w-full max-w-[500px] h-[50px] focus:border-black focus:border-[2px]"
      />
    </CheckoutInputLayout>
  )
}

export default CheckoutRecipientInput
