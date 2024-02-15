import { useQueryClient } from "@tanstack/react-query"
import { topSaleAPI } from "../models/topSaleAPI"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"
import { InfinityProductResponse } from "@/features/common/types/product"

export const useGetTopSaleProductListInfinityQuery = () => {
  const queryKey = ["topSale"]
  const queryClient = useQueryClient()

  const getSearchResultPromiseFn = (pageParam: number) => {
    return topSaleAPI.getTopSaleProductList(pageParam)
  }

  const initialBestProductData: InfinityProductResponse =
    queryClient.getQueryData(["topSale", "initial"]) ?? {
      productList: [],
      totalCount: "0",
    }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getSearchResultPromiseFn,
    initialData: initialBestProductData,
  }

  const { data, isLoading, loadMoreRef, isLoadMoreFetching } =
    useProductListInfinityQuery({
      ...infinityQueryProps,
    })

  return {
    topSaleProductList: data,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}
