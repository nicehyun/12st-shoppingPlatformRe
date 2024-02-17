import { bestProductListAPI } from "../models/bestProductListAPI"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"
import { useQueryClient } from "@tanstack/react-query"
import { InfinityProductResponse } from "@/features/common/types/product"
import { decodeCategoryPaths } from "@/features/common/utils/segment"

export const useGetBestProductListWithCategoryInfiniteQuery = () => {
  const { pathname } = useNavigations()
  const queryClient = useQueryClient()

  const [, , ...categoryPath] = pathname.split("/")

  const { categoriesPath, firstCategory, secondCategory, thirdCategory } =
    decodeCategoryPaths({
      categories: categoryPath ?? [],
    })

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
