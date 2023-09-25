import React, { useEffect } from "react"
import CheckoutInputLayout from "./CheckoutInputLayout"

import { useAppDispatch } from "@/redux/hooks"
import { checkToRecipient } from "@/redux/features/checkoutSlice"
import { useUserInput } from "@/common/hooks/useUserInput"
import { nameValidator } from "@/features/auth/signUp/utils/validation"

const CheckoutRecipientInput = () => {
  const dispatch = useAppDispatch()

  const {
    value: nameInputValue,
    handleValueChange: handleNameInputValueChange,
    handleInputBlur: handleNameInputBlur,
    hasError: hasErrorName,
    isValid: isNameValid,
    reset,
  } = useUserInput(nameValidator)

  useEffect(() => {
    if (isNameValid) {
      dispatch(checkToRecipient())
    }
  }, [isNameValid])

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
