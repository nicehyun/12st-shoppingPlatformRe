import { Products } from "../types/product"
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

export const getBestProductList = (productList: Products) => {
  const sortedProductList = productList.sort(
    (a, b) => b.sellCount - a.sellCount
  )

  return sortedProductList?.slice(0, 100)
}

export const getRandomArrivalProductList = (productList: Products) => {
  const shuffledArray = productList.sort(() => Math.random() - 0.5)

  return shuffledArray.slice(0, 30)
}

export const getTopSaleProductList = (productList: Products) => {
  const sortedProductList = productList.sort((a, b) => b.discount - a.discount)

  return sortedProductList?.slice(0, 100)
}
