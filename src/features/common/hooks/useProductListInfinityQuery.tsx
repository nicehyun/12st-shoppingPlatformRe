import { useInfiniteQuery } from "@tanstack/react-query"
import { useFeedbackModal } from "./useFeedbackModal"
import { InfinityProductResponse } from "../types/product"
import { useInfinityScrollIntersectionObserver } from "./useInfinityScrollIntersectionObserver"

interface ICustomInfinityQuery {
  queryKey: string[]
  promiseFn: (pageParam: number) => Promise<InfinityProductResponse>
  staleTime?: number
  cacheTime?: number
  initialData?: InfinityProductResponse
}

export const useProductListInfinityQuery = ({
  queryKey,
  promiseFn,
  cacheTime = 60 * 60 * 1000,
  staleTime = 60 * 60 * 1000,
  initialData,
}: ICustomInfinityQuery) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(queryKey, ({ pageParam = 1 }) => promiseFn(pageParam), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.productList.length < 12) return false

        return pages.length + 1
      },

      onError: () => {
        showFeedbackModalWithContent(
          "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
      staleTime,
      cacheTime,
      initialData: !initialData
        ? undefined
        : {
            pages: [
              {
                productList: initialData.productList,
                totalCount: initialData.totalCount,
              },
            ],
            pageParams: [undefined],
          },
    })

  const { loadMoreRef } = useInfinityScrollIntersectionObserver({
    fetchNextPage,
    hasNextPage,
    isFetching,
  })

  const isLoadMoreFetching = isFetching && hasNextPage

  return {
    data,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}
