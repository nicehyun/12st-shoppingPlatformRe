import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetUseMileAndGetMile } from "./useGetUseMileAndGetMile"

export const useUseMilePagination = () => {
  const perPage = 10

  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroUseMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.useMile !== 0
  )
  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, nonZeroUseMileList.length)

  const renderUseMileList = nonZeroUseMileList.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
    renderUseMileList,
  }
}
