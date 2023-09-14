import { usePostCodeModal } from "@/common/hooks/usePostCodeModal"
import { useUserInput } from "@/common/hooks/useUserInput"
import Input from "@/common/views/Input"
import { checkToAddress } from "@/redux/features/checkoutSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { additionalAddressValidator } from "../auth/signUp/utils/validation"
import SignUpSideButton from "../auth/signUp/views/SignUpSideButton"

import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutAddressInput = () => {
  const dispatch = useAppDispatch()

  const {
    addressValue,
    zipcodeValue,
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

  useEffect(() => {
    if (isValidAdditionalAddress && addressValue.length !== 0) {
      dispatch(checkToAddress())
    }
  }, [isValidAdditionalAddress, addressValue])

  return (
    <CheckoutInputLayout
      label="배송지"
      id="address"
      isRequired
      errorFeedbackMsg="배송지 상세 주소를 입력해주세요"
      inputState={{ hasError: hasErrorAdditionalAddress }}
    >
      <div className="max-w-[500px] flex flex-col flex-grow">
        <div className="flex ">
          <Input
            type="text"
            name="zipcode"
            id="zipcode"
            isReadOnly={true}
            classNames="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]"
            value={zipcodeValue}
          />

          <SignUpSideButton
            content="검색"
            classNames="ml-[10px] h-[50px] sm:h-[40px] md:h-[44px]"
            onClick={showPostCodeModal}
          />
        </div>

        <Input
          type="text"
          name="address"
          id="address"
          isReadOnly={true}
          classNames="mb-[10px] w-full h-[50px] sm:h-[40px] md:h-[44px]"
          value={addressValue}
        />

        <Input
          type="text"
          name="additionalAddress"
          id="additionalAddress"
          placeholder="배송지 상세 주소를 입력해주세요"
          value={additionalAddressInputValue}
          onBlur={handleAdditionalAddressInputBlur}
          isShowFeedback={hasErrorAdditionalAddress}
          onChange={handleAdditionalAddressInputValueChange}
          classNames="h-[50px] sm:h-[40px] md:h-[44px]"
          maxLength={50}
        />
      </div>

      {postCodeModalComponent}
    </CheckoutInputLayout>
  )
}

export default CheckoutAddressInput
