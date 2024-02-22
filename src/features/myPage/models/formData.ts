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

  if (!credit && !period) {
    return {
      selectedPayment: payment,
      creditName: credit,
      period,
    }
  }

  return { selectedPayment: payment }
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
