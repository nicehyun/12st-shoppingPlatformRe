import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { searchAPI } from "../models/searchAPI"

export const useGetSearchMatchingNameInfinityQuery = () => {
  const { pathname } = useNavigations()

  const [, , , searchParam] = pathname.split("/")
  const decodedSearchParam = decodeURIComponent(searchParam)

  const queryKey = ["searchProductList", "name", decodedSearchParam]

  const getSearchResultPromiseFn = (pageParam: number) => {
    return searchAPI.getSearchResultMatchingName(searchParam, pageParam)
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getSearchResultPromiseFn,
  }

  const { data, isLoading, loadMoreRef, isLoadMoreFetching } =
    useProductListInfinityQuery({
      ...infinityQueryProps,
    })

  const totalCount = data?.pages[0].totalCount ?? "0"
  const parsedTotalCount = parseInt(totalCount)

  return {
    productListMatchingName: data,
    isLoading,
    loadMoreRef,
    isLoadMoreFetching,
    totalCount: parsedTotalCount,
  }
}
