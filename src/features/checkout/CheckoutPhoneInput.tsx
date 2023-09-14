import { useUserInput } from "@/common/hooks/useUserInput"
import {
  checkToPhone,
  selectCheckoutDeliveyInfoCheckState,
} from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { phoneValidator } from "../auth/signUp/utils/validation"
import CheckoutInputLayout from "./CheckoutInputLayout"

interface ICheckoutPhoneInput {
  isRequired?: boolean
}

const CheckoutPhoneInput = ({ isRequired = false }: ICheckoutPhoneInput) => {
  const checkoutDeliveyInfoCheckState = useAppSelector(
    selectCheckoutDeliveyInfoCheckState
  )
  console.log(checkoutDeliveyInfoCheckState)

  const dispatch = useAppDispatch()

  const inputId = isRequired ? "phone1" : "phone2"
  const label = isRequired ? "연락처1" : "연락처2"

  const {
    value: phoneInputValue,
    handleValueChange: handlePhoneInputValueChange,
    handleInputBlur: handlePhoneInputBlur,
    isValid: isPhoneValid,
    hasError: hasErrorPhone,
    reset,
  } = useUserInput(phoneValidator)

  useEffect(() => {
    if (isPhoneValid) {
      dispatch(checkToPhone())
    }
  }, [isPhoneValid])

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
          : undefined
      }
      classNames="max-w-[230px]"
      inputType="tel"
    />
  )
}

export default CheckoutPhoneInput
