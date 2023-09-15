import { ProductInCart } from "@/features/cart/types/cart"
import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"

export const junkOfNoMoreThanOneDigit = (number: number) =>
  Math.floor(number / 10) * 10

export const discountedProductPrice = (rawPrice: number, discount: number) => {
  const discountedPrice = rawPrice - rawPrice * discount * 0.01

  return junkOfNoMoreThanOneDigit(discountedPrice)
}

export const numberToLocaleString = (number: number) =>
  number.toLocaleString("ko-kr")

export const accumulationOfProductsPrice = (productList: ProductInCart[]) =>
  productList.reduce(
    (prevValue, curValue) =>
      (prevValue + discountedProductPrice(curValue.price, curValue.discount)) *
      curValue.amount,
    0
  )

export const priceToUseCoupon = (
  coupon: RateCoupon | AmountCoupon,
  totalPrice: number
) => {
  let discountedPrice = 0

  if (coupon.type === "rate" && "discountRate" in coupon) {
    discountedPrice =
      totalPrice - discountedProductPrice(totalPrice, coupon.discountRate)
  }

  if (coupon.type === "amount" && "discountAmount" in coupon) {
    discountedPrice = coupon.discountAmount
  }

  return discountedPrice
}
