import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetUseMileAndGetMile } from "./useGetUseMileAndGetMile"

export const useGetMilePagination = () => {
  const perPage = 10
  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroGetMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.getMile !== 0
  )

  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, nonZeroGetMileList.length)

  const renderGetMileList = useMileAndGetMileInfo.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
    renderGetMileList,
  }
}
