import { useQuery } from "@tanstack/react-query"
import { productInfoAPI } from "../models/productInfoAPI"

export const useGetProductInfoQuery = (productId: string) => {
  console.log(productId)
  const { data, isLoading } = useQuery(["productInfo"], () =>
    productInfoAPI.getProductInfo(productId)
  )

  return { productInfo: data, isLoading }
}
