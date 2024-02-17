import { categoryAPI } from "../models/categoryAPI"
import { useProductListInfinityQuery } from "@/features/common/hooks/useProductListInfinityQuery"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { useQueryClient } from "@tanstack/react-query"
import { InfinityProductResponse } from "@/features/common/types/product"
import { decodeCategoryPaths } from "@/features/common/utils/segment"

export const useGetFiltedProductListWithCategoryInfinityQuery = () => {
  const { pathname } = useNavigations()
  const queryClient = useQueryClient()

  const [, , ...categoryPath] = pathname.split("/")

  const { categoriesPath, firstCategory, secondCategory, thirdCategory } =
    decodeCategoryPaths({
      categories: categoryPath ?? [],
    })

  const initialCategoryProductData: InfinityProductResponse =
    queryClient.getQueryData([
      "filtedProductListWithCategory",
      "initial",
      firstCategory,
      secondCategory,
      thirdCategory,
    ]) ?? {
      productList: [],
      totalCount: "0",
    }

  const queryKey = [
    "filtedProductListWithCategory",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  const getFiltedProductListWithCategoryPromiseFn = (pageParam: number) => {
    return categoryAPI.getFiltedProductListWithCategory(
      categoriesPath,
      pageParam
    )
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getFiltedProductListWithCategoryPromiseFn,
    initialData: initialCategoryProductData,
  }

  const { data, isLoading, loadMoreRef, isLoadMoreFetching } =
    useProductListInfinityQuery({
      ...infinityQueryProps,
    })

  return {
    filtedProductList: data,
    isLoading,
    loadMoreRef,
    isLoadMoreFetching,
  }
}
