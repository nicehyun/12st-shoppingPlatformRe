import { bestProductListAPI } from "../models/bestProductListAPI"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"

export const useGetBestProductListWithCategoryInfiniteQuery = () => {
  const { pathname } = useNavigations()

  const [, , firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    pathname.split("/")

  const firstCategory = decodeURIComponent(getAfterEquals(firstCategoryPath))
  const secondCategory = decodeURIComponent(
    parseSliceToAnd(getAfterEquals(secondCategoryPath))
  )
  const thirdCategory = decodeURIComponent(
    parseSliceToAnd(getAfterEquals(thirdCategoryPath))
  )

  const queryKey = [
    "bestProductListWithCategory",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  const getBestProductListWithCategoryPromiseFn = (pageParam: number) => {
    return bestProductListAPI.getBestProductListWithCategory(
      pathname,
      pageParam
    )
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getBestProductListWithCategoryPromiseFn,
  }

  const { data, isLoading, loadMoreRef, isLoadMoreFetching } =
    useProductListInfinityQuery({
      ...infinityQueryProps,
    })

  const bestProductList = data
  return {
    bestProductList,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}
