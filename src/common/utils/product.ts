import { Products } from "../types/product"

export const checkingTheExistOfProduct = (
  productInCartList: Products,
  productId: string
) => {
  const existingCartItemIndex = productInCartList.findIndex(
    (product) => product.id === productId
  )

  return existingCartItemIndex === -1 ? false : true
}
