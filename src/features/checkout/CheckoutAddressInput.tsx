import { usePostCodeModal } from "@/common/hooks/usePostCodeModal"
import { useUserInput } from "@/common/hooks/useUserInput"
import Input from "@/common/views/Input"
import { useEffect, useState } from "react"
import { additionalAddressValidator } from "../auth/signUp/utils/validation"
import SignUpSideButton from "../auth/signUp/views/SignUpSideButton"

import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutAddressInput = () => {
  const {
    addressValue,
    postCodeModalComponent,
    resetAddressValue,
    showPostCodeModal,
  } = usePostCodeModal()

  const {
    value: additionalAddressInputValue,
    handleValueChange: handleAdditionalAddressInputValueChange,
    handleInputBlur: handleAdditionalAddressInputBlur,
    hasError: hasErrorAdditionalAddress,
    isValid: isValidAdditionalAddress,
    reset,
  } = useUserInput(additionalAddressValidator)
  useEffect(() => {
    resetAddressValue()
  }, [])

  return (
    <CheckoutInputLayout
      label="배송지"
      id="recipient"
      isRequired
      errorFeedbackMsg="배송지 상세 주소를 입력해주세요"
      inputState={{ hasError: hasErrorAdditionalAddress }}
    >
      <div className="max-w-[500px] flex flex-col flex-grow">
        <div className="flex ">
          <Input
            type="text"
            name="recipient"
            id="recipient"
            isReadOnly={true}
            classNames="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]"
            value={addressValue}
          />

          <SignUpSideButton
            content="검색"
            classNames="ml-[10px] h-[50px] sm:h-[40px] md:h-[44px]"
            onClick={showPostCodeModal}
          />
        </div>

        <Input
          type="text"
          name="additionalAddress"
          id="additionalAddress"
          placeholder="나머지 주소를 입력해주세요"
          value={additionalAddressInputValue}
          onBlur={handleAdditionalAddressInputBlur}
          isShowFeedback={hasErrorAdditionalAddress}
          onChange={handleAdditionalAddressInputValueChange}
          classNames="h-[50px] sm:h-[40px] md:h-[44px]"
        />
      </div>

      {postCodeModalComponent}
    </CheckoutInputLayout>
  )
}

export default CheckoutAddressInput
