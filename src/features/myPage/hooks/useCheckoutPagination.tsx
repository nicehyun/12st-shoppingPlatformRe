import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import { useNavigations } from "@/features/common/hooks/useNavigations"
import { usePagination } from "@/features/common/hooks/usePagination"

export const useCheckoutPagination = () => {
  const { pathname } = useNavigations()
  const { checkoutList, isLoading } = useGetCheckoutListQuery()

  const perPage = pathname === "/myPage" ? 5 : 10

  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, checkoutList.length)

  const renderCheckoutList = checkoutList.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
    renderCheckoutList,
  }
}
