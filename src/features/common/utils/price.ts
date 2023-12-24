import { ProductInCart } from "@/features/cart/types/cart"
import { AmountCoupon, RateCoupon } from "@/features/cart/types/coupon"

export const junkOfNoMoreThandecimaPoint = (number: number) =>
  Math.floor(number)

export const junkOfNoMoreThanOneDigit = (number: number) =>
  Math.floor(number / 10) * 10

export const discountedProductPrice = (rawPrice: number, discount: number) => {
  const discountedPrice = rawPrice - rawPrice * discount * 0.01

  return junkOfNoMoreThanOneDigit(discountedPrice)
}

export const numberToLocaleString = (number: number) => {
  if (!number) return ""

  return number.toLocaleString("ko-kr")
}

export const accumulationOfProductsPrice = (productList: ProductInCart[]) =>
  productList.reduce(
    (prevValue, curValue) =>
      prevValue +
      discountedProductPrice(curValue.price, curValue.discount) *
        curValue.amount,
    0
  )

export const parseLocaleStringToNumber = (localeString: string) => {
  if (!localeString) return 0

  return parseFloat(localeString.replace(/,/g, ""))
}

/**
 * 숫자와 콤마로 구성된 문자열을 숫자로 변환
 * @param {string} numberString - 숫자와 콤마로 구성된 문자열
 * @returns {number} - 숫자로 변환된 결과
 */
export const convertinglocaleStringToNumber = (numberString: string) => {
  if (/^[0-9,]*$/.test(numberString)) {
    const withoutComma = numberString.replace(/,/g, "")
    return parseFloat(withoutComma)
  }
}

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
