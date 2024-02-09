import { useNavigations } from "@/features/common/hooks/useNavigations"
import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetHeartListQuery } from "@/features/productDetail/hooks/useGetHeartListQuery"

export const useHeartProductPagination = () => {
  const { pathname } = useNavigations()
  const perPage = pathname === "/myPage" ? 6 : 12

  const { heartList, isLoading } = useGetHeartListQuery()

  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, heartList.length)

  const renderHeartProductList = heartList.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
    renderHeartProductList,
  }
}
