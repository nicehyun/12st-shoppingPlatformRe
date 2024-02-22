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
    payment: JSON.parse(formData.get("payment") as string),
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
