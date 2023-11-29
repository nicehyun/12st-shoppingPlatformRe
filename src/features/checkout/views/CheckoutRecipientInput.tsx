import CheckoutInputLayout from "./CheckoutInputLayout"

import { useUserInput } from "@/features/common/hooks/useUserInput"
import { nameValidator } from "@/features/auth/signUp/utils/validation"
import { useEffect } from "react"

interface ICheckoutRecipientInput {
  defaultValue?: string
}

const CheckoutRecipientInput = ({ defaultValue }: ICheckoutRecipientInput) => {
  const {
    value: nameInputValue,
    handleValueChange: handleNameInputValueChange,
    handleInputBlur: handleNameInputBlur,
    hasError: hasErrorName,
    isValid: isNameValid,
    reset,
  } = useUserInput(nameValidator, defaultValue)

  useEffect(() => {
    return () => reset()
  }, [])

  return (
    <CheckoutInputLayout
      label="수령인"
      id="recipient"
      isRequired
      inputState={{
        value: nameInputValue,
        handleValueChange: handleNameInputValueChange,
        handleInputBlur: handleNameInputBlur,
        hasError: hasErrorName,
        isValid: isNameValid,
      }}
      errorFeedbackMsg="올바른 수령인 이름을 입력해주세요."
      inputMaxLength={10}
    />
  )
}

export default CheckoutRecipientInput
