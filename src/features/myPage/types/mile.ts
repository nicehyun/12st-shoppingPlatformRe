import { CheckoutDate } from "@/features/checkout/types/checkout"

export type UseMileAndGetMile = {
  getMile: number
  useMile: number
  checkoutNumber: string
  checkoutDate: CheckoutDate
}
