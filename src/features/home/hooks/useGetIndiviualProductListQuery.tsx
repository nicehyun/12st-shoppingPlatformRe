import { useQuery } from "@tanstack/react-query"
import { homeAPI } from "../models/homeAPI"

export const useGetIndiviualProductListQuery = () => {
  const { data, isLoading } = useQuery(["indiviualProductList"], () =>
    homeAPI.getIndividualSectionProductList()
  )

  const arrivalProductList = data?.arrivalProductList ?? []
  const bestProductList = data?.bestProductList ?? []
  const topSaleProductList = data?.topSaleProductList ?? []

  return { arrivalProductList, bestProductList, topSaleProductList, isLoading }
}
