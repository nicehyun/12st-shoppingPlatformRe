import { arrivalAPI } from "../models/arrivalAPI"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useInfinityScrollIntersectionObserver } from "@/features/common/hooks/useInfinityScrollIntersectionObserver"

export const useGetArrivalProductListInfinityQuery = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      ["arrival"],
      ({ pageParam = 1 }) => arrivalAPI.getArrivalProductList(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          if (pages.length >= 5) return false

          if (lastPage.productList.length < 12) return false

          return pages.length + 1
        },

        onError: () => {
          showFeedbackModalWithContent(
            "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
          )
        },
        cacheTime: 60 * 60 * 1000,
        staleTime: 60 * 60 * 1000,
      }
    )

  const { loadMoreRef } = useInfinityScrollIntersectionObserver({
    fetchNextPage,
    hasNextPage,
    isFetching,
  })

  const isLoadMoreFetching = isFetching && hasNextPage

  return {
    arrivalProductList: data,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}
