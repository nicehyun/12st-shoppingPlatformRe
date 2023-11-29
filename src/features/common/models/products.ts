import {
  discountedProductPrice,
  junkOfNoMoreThandecimaPoint,
  numberToLocaleString,
} from "../utils/price"

export const accumulateMile = (rawPrice: number, discount: number) => {
  return numberToLocaleString(
    junkOfNoMoreThandecimaPoint(
      discountedProductPrice(rawPrice, discount) * 0.01
    )
  )
}

export const accumulateDiscountPrice = (rawPrice: number, discount: number) => {
  return numberToLocaleString(discountedProductPrice(rawPrice, discount))
}
