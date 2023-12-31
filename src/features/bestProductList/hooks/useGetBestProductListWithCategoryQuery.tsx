import { useQuery } from "@tanstack/react-query"
import { bestProductListAPI } from "../models/bestProductListAPI"

export const useGetBestProductListWithCategoryQuery = (
  categoryPath: string[]
) => {
  const { data, isLoading } = useQuery(["bestProductListWithCategory"], () =>
    bestProductListAPI.getBestProductListWithCategory(categoryPath)
  )

  const bestProductListWithCategory = data ?? []
  return { bestProductListWithCategory, isLoading }
}
