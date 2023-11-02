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
