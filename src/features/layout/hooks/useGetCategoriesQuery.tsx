import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"

export const useGetCategoriesQuery = () => {
  const dispatch = useAppDispatch()
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

  const { data, isLoading } = useQuery(
    ["categories"],
    layoutAPI.getCategories,
    {
      onError: () => {
        dispatch(
          showFeedbackModal({
            modalContent:
              "카테고리 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        )
      },

      cacheTime: Infinity,
    }
  )

  const categories = data ?? []

  const currentCategory = {
    firstCategory,
    secondCategory,
    thirdCategory,
  }

  return {
    categories,
    isLoading,
    currentCategory,
  }
}
