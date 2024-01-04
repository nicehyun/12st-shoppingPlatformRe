import { useQuery } from "@tanstack/react-query"
import { bestProductListAPI } from "../models/bestProductListAPI"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"

export const useGetBestProductListWithCategoryQuery = (
  categoryPath: string[]
) => {
  const dispatch = useAppDispatch()

  const { data, isLoading } = useQuery(
    ["bestProductListWithCategory"],
    () => bestProductListAPI.getBestProductListWithCategory(categoryPath),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )

  const bestProductListWithCategory = data ?? []
  return { bestProductListWithCategory, isLoading }
}
