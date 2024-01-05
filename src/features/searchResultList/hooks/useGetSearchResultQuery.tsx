import { layoutAPI } from "@/features/layout/models/layoutAPI"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useSuspenseQuery } from "@suspensive/react-query"

export const useGetSearchResultQuery = (searchParams: string[]) => {
  const [, searchPrams] = searchParams

  const decodedsearchPrams = decodeURIComponent(searchPrams)
  const dispatch = useAppDispatch()
  const { data } = useSuspenseQuery(
    ["searchResult", searchParams],
    () => layoutAPI.getSearchResult(decodedsearchPrams),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      cacheTime: 60 * 60 * 1000,
    }
  )

  const filteredProductsMatchingName = data?.filteredProductsMatchingName ?? []
  const filteredProductsMatchingBrand =
    data?.filteredProductsMatchingBrand ?? []
  return { filteredProductsMatchingName, filteredProductsMatchingBrand }
}
