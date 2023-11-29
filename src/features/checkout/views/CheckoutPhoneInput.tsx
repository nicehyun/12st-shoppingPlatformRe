import { useUserInput } from "@/features/common/hooks/useUserInput"
import { phoneValidator } from "@/features/auth/signUp/utils/validation"

import { ChangeEvent, useEffect } from "react"

import CheckoutInputLayout from "./CheckoutInputLayout"

interface ICheckoutPhoneInput {
  isRequired?: boolean
  defaultValue?: string | null
}

const CheckoutPhoneInput = ({
  isRequired = false,
  defaultValue,
}: ICheckoutPhoneInput) => {
  const inputId = isRequired ? "phone1" : "phone2"
  const label = isRequired ? "연락처1" : "연락처2"

  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset,
  } = useUserInput(phoneValidator, defaultValue ?? "")

  const handlePhoneInputValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(Number(event.target.value))) {
      return
    }

    handlePhoneInputChange(event)
  }

  useEffect(() => {
    return () => reset()
  }, [])

  return (
    <CheckoutInputLayout
      label={label}
      id={inputId}
      isRequired={isRequired}
      errorFeedbackMsg={isRequired ? "올바른 연락처를 입력해주세요" : ""}
      inputState={
        isRequired
          ? {
              value: phoneInputValue,
              handleValueChange: handlePhoneInputValueChange,
              handleInputBlur: handlePhoneInputBlur,
              isValid: isPhoneValid,
              hasError: hasErrorPhone,
            }
          : {
              value: phoneInputValue,
              handleValueChange: handlePhoneInputValueChange,
            }
      }
      classNames="max-w-[230px]"
      inputType="text"
      inputMaxLength={11}
    />
  )
}

export default CheckoutPhoneInput
