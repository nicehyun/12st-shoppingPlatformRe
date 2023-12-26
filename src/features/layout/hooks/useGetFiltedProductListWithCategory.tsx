import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"
import { combineStrings } from "@/features/common/utils/text"

export const useGetFiltedProductListWithCategory = (
  categoriesPath: string[]
) => {
  const { data, isError, isLoading } = useQuery(
    ["filtedProductListWithCategory"],
    () =>
      layoutAPI.getFiltedProductListWithThridCategory(
        categoriesPath.length !== 0
          ? `/${combineStrings(categoriesPath.join(","))}`
          : ""
      )
  )

  const filtedProductList = data ?? []

  return {
    filtedProductList,
    isError,
    isLoading,
  }
}

export default useGetFiltedProductListWithCategory
