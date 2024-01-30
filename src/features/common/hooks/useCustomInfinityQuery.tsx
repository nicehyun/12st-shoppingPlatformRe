import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { useFeedbackModal } from "./useFeedbackModal"

interface ICustomInfinityQuery<T> {
  queryKey: string[]
  promiseFn: (pageParam: number) => Promise<T[]>
  staleTime?: number
  cacheTime?: number
}

export const useCustomInfinityQuery = <T,>({
  queryKey,
  promiseFn,
  cacheTime = 60 * 60 * 1000,
  staleTime = 60 * 60 * 1000,
}: ICustomInfinityQuery<T>) => {
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(queryKey, ({ pageParam = 1 }) => promiseFn(pageParam), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 12) return false

        return pages.length + 1
      },

      onError: () => {
        showFeedbackModalWithContent(
          "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
      staleTime,
      cacheTime,
    })

  useEffect(() => {
    const currentRef = loadMoreRef.current

    if (!currentRef || !hasNextPage || isFetching) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) fetchNextPage()
      },
      { threshold: 1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [fetchNextPage, hasNextPage, isFetching])

  const isLoadMoreFetching = isFetching && hasNextPage

  return {
    data,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}
