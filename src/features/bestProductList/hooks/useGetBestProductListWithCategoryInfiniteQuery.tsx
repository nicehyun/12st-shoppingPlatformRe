import { useInfiniteQuery } from "@tanstack/react-query"
import { bestProductListAPI } from "../models/bestProductListAPI"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { useEffect, useRef } from "react"

// TODO : page 쿼리 키로 저장하기
// TODO : product label index 반환하기
// TODO : useEffect 코드 수정하기

export const useGetBestProductListWithCategoryInfiniteQuery = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null)
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

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      [
        "bestProductListWithCategory",
        firstCategory,
        secondCategory,
        thirdCategory,
      ],
      ({ pageParam = 1 }) =>
        bestProductListAPI.getBestProductListWithCategory(pathname, pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length === 0) return undefined
          return pages.length + 1
        },

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
  }, [fetchNextPage, hasNextPage])

  const bestProductList = data
  return {
    bestProductList,
    isLoading,
    isFetching,
    loadMoreRef,
  }
}
