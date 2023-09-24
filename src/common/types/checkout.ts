import { ProductsInCart } from "@/features/cart/types/cart"
import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"

export type CheckoutPaymentInfo = {
  selectedPayment: string
  creditName?: string
  period?: string
}

export type CheckoutList = {
  deliveryName: string
  recipient: string
  zipcode: string
  address: string
  additionalAddress: string
  phone1: string
  phone2: string | null
  deliveryMemo: string | null
  prductList: ProductsInCart
  coupon: RateCoupon | AmountCoupon | null
  useMile: number
  getMile: number
  payment: CheckoutPaymentInfo
  date?: string
}
