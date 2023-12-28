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
  return discountedProductPrice(rawPrice, discount)
}

export const getRandomArrivalProductList = (productList: Products) => {
  const shuffledArray = productList.sort(() => Math.random() - 0.5)

  return shuffledArray.slice(0, 30)
}

export const getTopSaleProductList = (productList: Products) => {
  const sortedProductList = productList.sort((a, b) => b.discount - a.discount)

  return sortedProductList?.slice(0, 100)
}

export const getSecondCategories = (productList: Products): string[] => {
  const secondCategories = new Set<string>()

  productList.forEach((product) => {
    secondCategories.add(product.category2)
  })

  return [...secondCategories]
}

export const getThridCategories = (
  productList: Products,
  secondCategory: string
): string[] => {
  const thridCategories = new Set<string>()

  productList.forEach((product) => {
    if (product.category2 === secondCategory) {
      thridCategories.add(product.category3)
    }
  })

  return [...thridCategories]
}
