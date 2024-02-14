import { bestProductListAPI } from "../models/bestProductListAPI"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import {
  getAfterEquals,
  parseAndToSlice,
  parseSliceToAnd,
} from "@/features/common/utils/text"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"
import { useQueryClient } from "@tanstack/react-query"
import { InfinityProductResponse } from "@/features/common/types/product"

export const useGetBestProductListWithCategoryInfiniteQuery = () => {
  const { pathname } = useNavigations()

  const queryClient = useQueryClient()

  const [, , firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    pathname.split("/")

  const firstCategory = getAfterEquals(decodeURIComponent(firstCategoryPath))

  const secondCategory = parseSliceToAnd(
    getAfterEquals(decodeURIComponent(secondCategoryPath))
  )
  const thirdCategory = parseSliceToAnd(
    getAfterEquals(decodeURIComponent(thirdCategoryPath))
  )

  const categoriesPath =
    "/" +
    parseAndToSlice(firstCategory) +
    "/" +
    parseAndToSlice(secondCategory) +
    "/" +
    parseAndToSlice(thirdCategory)

  const queryKey = [
    "bestProductListWithCategory",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  const initialBestProductData: InfinityProductResponse =
    queryClient.getQueryData([
      "bestProductListWithCategory",
      "initial",
      firstCategory,
      secondCategory,
      thirdCategory,
    ]) ?? {
      productList: [],
      totalCount: "0",
    }

  const getBestProductListWithCategoryPromiseFn = (pageParam: number) => {
    return bestProductListAPI.getBestProductListWithCategory(
      categoriesPath,
      pageParam
    )
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getBestProductListWithCategoryPromiseFn,
    initialData: initialBestProductData,
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
