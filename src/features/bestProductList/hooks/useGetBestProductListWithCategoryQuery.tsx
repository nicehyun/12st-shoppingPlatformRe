import { useQuery } from "@tanstack/react-query"
import { bestProductListAPI } from "../models/bestProductListAPI"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"

export const useGetBestProductListWithCategoryQuery = () => {
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
    [
      "bestProductListWithCategory",
      firstCategory,
      secondCategory,
      thirdCategory,
    ],
    () => bestProductListAPI.getBestProductListWithCategory(pathname),
    {
      onError: () => {
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        )
      },
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    }
  )

  const bestProductListWithCategory = data ?? []
  return { bestProductListWithCategory, isLoading }
}
