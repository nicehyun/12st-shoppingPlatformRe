import { CheckoutDate } from "@/features/common/types/checkout"

export type UseMileAndGetMile = {
  getMile: number
  useMile: number
  checkoutNumber: string
  checkoutDate: CheckoutDate
}
