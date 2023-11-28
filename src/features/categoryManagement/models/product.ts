import { Products } from "@/common/types/product"

export const filterProductsByThirdCategory = (
  products: Products,
  thirdCategory: string
) => {
  return products?.filter((product) => product.category3 === thirdCategory)
}
