import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/models/validation"
import {
  parseAddressFromCheckoutFormEvent,
  parseClauseFromCheckoutFormEvent,
  parseMileFromCheckoutFormEvent,
  parsePaymentFromCheckoutFormEvent,
  parsePriceFromCheckoutFormEvent,
} from "./formData"

export const validCheckUseMile = (
  useMileValue: number,
  availableMile: number,
  totalPriceOfCheckedProduct: number
) => {
  if (!availableMile) {
    return {
      valid: false,
    }
  }

  if (useMileValue > totalPriceOfCheckedProduct) {
    return {
      valid: false,
    }
  }

  if (useMileValue > availableMile) {
    return {
      valid: false,
    }
  }

  return {
    valid: true,
  }
}

export const validCheckSelectCoupon = (totalPriceOfCheckedProduct: number) => {
  if (totalPriceOfCheckedProduct < 15000) {
    return {
      valid: false,
    }
  }

  return {
    valid: true,
  }
}

export const validCheckFromCheckoutFormEvent = (formData: FormData) => {
  const { additionalAddress, address, phone1, recipient } =
    parseAddressFromCheckoutFormEvent(formData)
  const { collectionOfUserInfo, paymentAgencyClause, provisionOfUserInfo } =
    parseClauseFromCheckoutFormEvent(formData)
  const { useMile } = parseMileFromCheckoutFormEvent(formData)
  const { creditName, payment } = parsePaymentFromCheckoutFormEvent(formData)
  const { discountedPriceWithCoupon, totalPriceOfCheckedProduct } =
    parsePriceFromCheckoutFormEvent(formData)

  if (!nameValidator(recipient)) {
    return {
      isValid: false,
      message: "올바른 수령인 이름을 입력해주세요.",
    }
  }

  if (!address) {
    return {
      isValid: false,
      message: "배송지 주소를 입력해주세요.",
    }
  }

  if (!additionalAddressValidator(additionalAddress)) {
    return {
      isValid: false,
      message: "올바른 배송지 상세 주소를 입력해주세요.",
    }
  }

  if (!phoneValidator(phone1)) {
    return {
      isValid: false,
      message: "올바른 연락처를 입력해주세요.",
    }
  }

  if (+useMile > +totalPriceOfCheckedProduct - +discountedPriceWithCoupon) {
    return {
      isValid: false,
      message: "상품 가격보다 마일리지를 많이 사용하실 수 없습니다.",
    }
  }

  if (JSON.parse(payment).value === "credit" && !creditName) {
    return {
      isValid: false,
      message: "카드사를 선택해주세요.",
    }
  }

  if (
    collectionOfUserInfo !== "on" ||
    provisionOfUserInfo !== "on" ||
    paymentAgencyClause !== "on"
  ) {
    return {
      isValid: false,
      message: "결제를 위해 필수사항에 모두 동의해주세요.",
    }
  }

  return {
    isValid: true,
  }
}
