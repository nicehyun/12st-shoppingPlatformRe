import { useSuspenseQuery } from "@suspensive/react-query"
import { homeAPI } from "../models/homeAPI"

export const useGetIndiviualProductListQuery = () => {
  const { data } = useSuspenseQuery(
    ["indiviualProductList"],
    () => homeAPI.getIndividualSectionProductList(),
    {
      cacheTime: Infinity,
    }
  )

  const arrivalProductList = data?.arrivalProductList ?? []
  const bestProductList = data?.bestProductList ?? []
  const topSaleProductList = data?.topSaleProductList ?? []

  return {
    arrivalProductList,
    bestProductList,
    topSaleProductList,
  }
}
