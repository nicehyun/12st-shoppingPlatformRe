import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"
import { combineStrings } from "@/features/common/utils/text"

export const useGetfiltedProductListQuery = (categoriesString: string) => {
  const { data, isError, isLoading } = useQuery(["filtedProductList"], () =>
    layoutAPI.getFiltedProductListWithThridCategory(
      combineStrings(categoriesString)
    )
  )

  const filtedProductList = data ?? []

  return {
    filtedProductList,
    isError,
    isLoading,
  }
}
