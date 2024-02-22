import { ProductsInCart } from "@/features/cart/types/cart"
import { AmountCoupon, RateCoupon } from "@/features/common/types/coupon"

export type CheckoutPaymentInfo = {
  selectedPayment: { value: string; label: string }
  creditName?: string
  period?: string
}

export type CheckoutList = {
  deliveryName: string | null
  recipient: string
  zipcode: string
  address: string
  additionalAddress: string
  phone1: string
  phone2: string | null
  deliveryMemo: string | null
  productList: ProductsInCart
  coupon: RateCoupon | AmountCoupon | null
  useMile: number
  getMile: number
  payment: CheckoutPaymentInfo
  checkoutDate: string
  checkoutNumber: string
}
