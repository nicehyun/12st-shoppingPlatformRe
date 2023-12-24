import { CheckoutPaymentInfo } from "@/features/checkout/types/checkout"

export type CancelType = "all" | "cancel" | "change" | "return"

export type CsType =
  | "delivery"
  | "checkout"
  | "cancel"
  | "return"
  | "change"
  | "refund"
  | "deposit"
  | "userInfo"
  | "payment"
  | "product"
  | "couponAndMile"
  | "system"
  | "etc"

export type CsRelationEl = {
  value: CsType
  label: string
  peer: string
  peerChecked: {
    bg: string
    borderColor: string
  }
}

export type CustomerCounselingUserInfo = {
  email: string
  name: string
}

export type CustomerCounselingDetail = {
  csType: CsType
  counselingTitle: string
  counselingContent: string
  checkoutNumber?: string
  checkoutProductName?: string
  checkoutDate?: string
  checkoutPayment?: CheckoutPaymentInfo
  productName?: string
  productPrice?: number
  writeDate?: string
}

export type GetCustomerCounselingDetailResponse = {
  id: number
  email: string
  customerCounselingList: CustomerCounselingDetail[]
}
