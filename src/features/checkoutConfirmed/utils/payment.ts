export type Payment =
  | "tosspay"
  | "naverpay"
  | "kakaopay"
  | "samsungpay"
  | "payco"
  | "SSGpay"
  | "deposit"
export const getPaymentContent = (payment: string & Payment) => {
  switch (payment) {
    case "tosspay":
      return "토스페이"
    case "naverpay":
      return "네이버페이"
    case "kakaopay":
      return "카카오페이"
    case "samsungpay":
      return "삼성페이"
    case "payco":
      return "페이코"
    case "SSGpay":
      return "SSG 페이"
    case "deposit":
      return "무통장입금"
    default:
      return ""
  }
}
