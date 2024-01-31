import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query"
import { useEffect, useRef } from "react"

interface IInfinityScrollIntersectionObserver {
  hasNextPage: boolean | undefined
  isFetching: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult>
}

export const useInfinityScrollIntersectionObserver = ({
  hasNextPage,
  isFetching,
  fetchNextPage,
}: IInfinityScrollIntersectionObserver) => {
  const loadMoreRef = useRef<HTMLDivElement>(null)

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

  return { loadMoreRef }
}
