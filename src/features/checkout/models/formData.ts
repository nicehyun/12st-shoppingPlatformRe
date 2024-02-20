import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"

export const parseAddressFromCheckoutFormEvent = (formData: FormData) => {
  return {
    deliveryName: formData.get("deliveryName") as string,
    recipient: formData.get("recipient") as string,
    zipcode: formData.get("zipcode") as string,
    address: formData.get("address") as string,
    additionalAddress: formData.get("additionalAddress") as string,
    phone1: formData.get("phone1") as string,
    phone2: formData.get("phone2") as string,
    defalutAddressRegistration: formData.get("defalutAddressRegistration") as
      | "on"
      | null,
  }
}

export const parseMemoFromCheckoutFormEvent = (formData: FormData) => {
  const selectedDeliveryMemo = formData.get("deliveryMemo-select")

  if (!selectedDeliveryMemo)
    return {
      deliveryMemo: null,
    }

  if (selectedDeliveryMemo === "직접입력")
    return {
      deliveryMemo: formData.get("deliveryMemo-direct") as string,
    }

  return {
    deliveryMemo: selectedDeliveryMemo,
  }
}

export const parseClauseFromCheckoutFormEvent = (formData: FormData) => {
  return {
    collectionOfUserInfo: formData.get("collectionOfUserInfo") as string,
    provisionOfUserInfo: formData.get("provisionOfUserInfo") as string,
    paymentAgencyClause: formData.get("paymentAgencyClause") as string,
  }
}

export const parseMileFromCheckoutFormEvent = (formData: FormData) => {
  return { useMile: formData.get("useMile") as string }
}

export const parsePaymentFromCheckoutFormEvent = (formData: FormData) => {
  return {
    payment: formData.get("payment") as string,
    creditName: formData.get("credit-select") as string,
    period: formData.get("period-select") as string,
  }
}

export const parsePriceFromCheckoutFormEvent = (formData: FormData) => {
  return {
    totalPriceOfCheckedProduct: formData.get(
      "totalPriceOfCheckedProduct"
    ) as string,
    discountedPriceWithCoupon: formData.get(
      "discountedPriceWithCoupon"
    ) as string,
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
