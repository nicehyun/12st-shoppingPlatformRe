import { useQuery } from "@tanstack/react-query"
import { bestProductListAPI } from "../models/bestProductListAPI"

export const useGetBestProductListQuery = (categoriesPathArr: string[]) => {
  const { data, isLoading } = useQuery(["filtedBestProductList"], () =>
    bestProductListAPI.getBestProductListWithCategory(categoriesPathArr)
  )

  const bestProductList = data ?? []
  return { bestProductList, isLoading }
}
