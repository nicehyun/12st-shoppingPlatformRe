import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { categoryAPI } from "../models/categoryAPI"
import { useCustomInfinityQuery } from "@/features/common/hooks/useCustomInfinityQuery"
import { Product } from "@/features/common/types/product"
import { useNavigations } from "@/features/common/hooks/useNavigations"

export const useGetFiltedProductListWithCategoryInfinityQuery = () => {
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
    "filtedProductListWithCategory",
    firstCategory,
    secondCategory,
    thirdCategory,
  ]

  const getFiltedProductListWithCategoryPromiseFn = (pageParam: number) => {
    return categoryAPI.getFiltedProductListWithCategory(pathname, pageParam)
  }

  const infinityQueryProps = {
    queryKey,
    promiseFn: getFiltedProductListWithCategoryPromiseFn,
  }

  const { data, isLoading, loadMoreRef, isLoadMoreFetching } =
    useCustomInfinityQuery<Product>({
      ...infinityQueryProps,
    })

  return {
    filtedProductList: data,
    isLoading,
    loadMoreRef,
    isLoadMoreFetching,
  }
}
