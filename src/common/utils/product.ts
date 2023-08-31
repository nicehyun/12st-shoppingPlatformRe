export const checkingTheExistOfProduct = (
  productInCartList: string[],
  productId: string
) => {
  return productInCartList.includes(productId)
}
