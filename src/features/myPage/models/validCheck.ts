import { pasrseDeliveryInfoFromFormData } from "@/features/common/models/formData"
import {
  parseCSTypeFromFormData,
  parseCheckoutInfoFromFormData,
  parseCounselingContentFromFormData,
  parseMaketingClauseFromFormData,
  parsePrevDeliveryInfoFromFormData,
  parseProductInfoFromFormData,
} from "./formData"
import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import { validCheckDeliveryInfo } from "@/features/checkout/models/validCheck"

export const validCheckMarketingClaustUpdate = (formData: FormData) => {
  const { isCheckedMarketingClause, prevMarketingClause } =
    parseMaketingClauseFromFormData(formData)

  if (prevMarketingClause === isCheckedMarketingClause) {
    return {
      valid: false,
      message: "기존 마케팅 약관 동의와 동일합니다. 변경사항이 없습니다.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckCounSelingWrite = (formData: FormData) => {
  const { selectedCsType } = parseCSTypeFromFormData(formData)

  if (selectedCsType === "null") {
    return { valid: false, message: "문의 유형을 선택해주세요." }
  }

  const checkoutRelationRadioValueList = [
    "delivery",
    "checkout",
    "cancel",
    "return",
    "change",
    "refund",
    "deposit",
  ]

  if (checkoutRelationRadioValueList.includes(selectedCsType as string)) {
    const {
      checkoutDate,
      checkoutNumber,
      checkoutPayment,
      checkoutProductName,
    } = parseCheckoutInfoFromFormData(formData)

    if (
      ![
        !!checkoutNumber,
        !!checkoutProductName,
        !!checkoutDate,
        !!checkoutPayment,
      ].every((checkoutRelationCsValidEl) => checkoutRelationCsValidEl)
    ) {
      return {
        valid: false,
        message: "주문번호를 조회해주세요.",
      }
    }
  }

  if (selectedCsType === "product") {
    const { productName, productPrice } = parseProductInfoFromFormData(formData)
    if (
      ![!!productName, !!productPrice].every(
        (productRelationCsValidEl) => productRelationCsValidEl
      )
    ) {
      return {
        valid: false,
        message: "상품번호를 조회해주세요.",
      }
    }
  }

  const { counselingContent, counselingTitle } =
    parseCounselingContentFromFormData(formData)

  if (
    ![!!counselingTitle, !!counselingContent].every(
      (commonValidEl) => commonValidEl
    )
  ) {
    return {
      valid: false,
      message: "문의 제목과 내용을 작성해주세요.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckComparisonOfChangeDeliveryInfo = (
  formData: FormData
) => {
  const paddingUpdateDeliveryInfo = pasrseDeliveryInfoFromFormData(formData)

  const { prevDeliveryInfo } = parsePrevDeliveryInfoFromFormData(formData)

  const deliveryInfoToBeUpdated: DeliveryInfo = {
    ...paddingUpdateDeliveryInfo,
  }

  if (
    prevDeliveryInfo &&
    Object.keys(prevDeliveryInfo).every(
      (key) => prevDeliveryInfo[key] === deliveryInfoToBeUpdated[key]
    )
  ) {
    return {
      valid: false,
      message: "기존 배송지 정보와 동일합니다. 변경사항이 없습니다.",
    }
  }

  return {
    valid: true,
  }
}
