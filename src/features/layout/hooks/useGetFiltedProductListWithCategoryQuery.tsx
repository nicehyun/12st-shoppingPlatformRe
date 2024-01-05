import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"
import { combineStrings } from "@/features/common/utils/text"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"

export const useGetFiltedProductListWithCategoryQuery = (
  categoriesPath: string[]
) => {
  const dispatch = useAppDispatch()
  const { data, isError, isLoading } = useQuery(
    ["filtedProductListWithCategory"],
    () =>
      layoutAPI.getFiltedProductListWithThridCategory(
        categoriesPath.length !== 0
          ? `/${combineStrings(categoriesPath.join(","))}`
          : ""
      ),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      staleTime: 60 * 60 * 1000,
      cacheTime: Infinity,
      suspense: true,
    }
  )

  const filtedProductList = data ?? []

  return {
    filtedProductList,
    isError,
    isLoading,
  }
}
