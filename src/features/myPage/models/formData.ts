import { DeliveryInfo } from "@/features/common/types/deliveryInfo"

export const parseMaketingClauseFromFormData = (formData: FormData) => {
  return {
    isCheckedMarketingClause: formData.get("marketing") === "on",
    prevMarketingClause: formData.get("prevMarketingClause") === "true",
  }
}

export const parseCounselingContentFromFormData = (formData: FormData) => {
  return {
    counselingTitle: formData.get(
      "coustomweCounselingWrite-content__title"
    ) as string,
    counselingContent: formData.get(
      "coustomweCounselingWrite-content__content"
    ) as string,
  }
}

export const parseProductInfoFromFormData = (formData: FormData) => {
  return {
    productName: formData.get(
      "coustomweCounselingWrite-productInfo__productName"
    ) as string,
    productPrice: formData.get(
      "coustomweCounselingWrite-productInfo__price"
    ) as string,
  }
}

export const parsePaymentString = (paymentString: string) => {
  const [payment, credit, period] = paymentString.split(" - ")

  const paymentList = [
    { label: "신용/체크카드", value: "credit" },
    { label: "토스페이", value: "tosspay" },
    { label: "네이버페이", value: "naverpay" },
    { label: "카카오페이", value: "kakaopay" },
    { label: "삼성페이", value: "samsungpay" },
    { label: "페이코", value: "payco" },
    { label: "SSG 페이", value: "SSGpay" },
    { label: "무통장입금", value: "deposit" },
  ]

  const findPaymentMethodByValue = (
    paymentList: { label: string; value: string }[],
    value: string
  ) => {
    return paymentList.find((paymentMethod) => paymentMethod.value === value)
  }

  if (!credit && !period) {
    return {
      selectedPayment: findPaymentMethodByValue(paymentList, payment),
      creditName: credit,
      period,
    }
  }

  return { selectedPayment: findPaymentMethodByValue(paymentList, payment) }
}

export const parseCheckoutInfoFromFormData = (formData: FormData) => {
  return {
    checkoutNumber: formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutNumber"
    ) as string,
    checkoutProductName: formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutProductName"
    ) as string,
    checkoutDate: formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutDate"
    ) as string,
    checkoutPayment: formData.get(
      "coustomweCounselingWrite-checkoutInfo__checkoutPayment"
    ) as string,
  }
}

export const parseCSTypeFromFormData = (formData: FormData) => {
  return {
    selectedCsType: formData.get("selectedCsType") as string,
  }
}

export const parsePrevDeliveryInfoFromFormData = (formData: FormData) => {
  return {
    prevDeliveryInfo: JSON.parse(
      formData.get("prevDeliveryInfo") as string
    ) as DeliveryInfo,
  }
}
