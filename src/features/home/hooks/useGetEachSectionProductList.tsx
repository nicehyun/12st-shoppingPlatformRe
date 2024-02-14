import { arrivalAPI } from "@/features/arrivalProductList/models/arrivalAPI"
import { bestProductListAPI } from "@/features/bestProductList/models/bestProductListAPI"
import { topSaleAPI } from "@/features/topSaleProductList/models/topSaleAPI"
import { useQueries } from "@tanstack/react-query"

export const useGetEachSectionProductList = () => {
  const [bestProductListData, arrivalProductListData, topSaleProductListData] =
    useQueries({
      queries: [
        {
          queryKey: ["bestProductList", "home"],
          queryFn: () =>
            bestProductListAPI.getBestProductListWithCategory("/home", 1),
          staleTime: 60 * 60 * 1000,
        },
        {
          queryKey: ["arrivalProductList", "home"],
          queryFn: () => arrivalAPI.getArrivalProductList(1),
          staleTime: 60 * 60 * 1000,
        },
        {
          queryKey: ["topSaleProductList", "home"],
          queryFn: () => topSaleAPI.getTopSaleProductList(1),
          staleTime: 60 * 60 * 1000,
        },
      ],
    })

  return {
    bestProductList: {
      productList: bestProductListData.data?.productList ?? [],
      isLoading: bestProductListData.isLoading,
    },
    arrivalProductList: {
      productList: arrivalProductListData.data?.productList ?? [],
      isLoading: arrivalProductListData.isLoading,
    },
    topSaleProductList: {
      productList: topSaleProductListData.data?.productList ?? [],
      isLoading: topSaleProductListData.isLoading,
    },
  }
}
