import { topSaleAPI } from "../models/topSaleAPI"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"

export const useGetTopSaleProductListInfinityQuery = () => {
  const queryKey = ["topSale"]

  const getSearchResultPromiseFn = (pageParam: number) => {
    return topSaleAPI.getTopSaleProductList(pageParam)
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getSearchResultPromiseFn,
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
