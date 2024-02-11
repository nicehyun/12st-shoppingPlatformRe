import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetCustomerCounselingListQuery } from "./useGetCustomerCounselingListQuery"

export const useInquiryCustomerCounselingPagination = () => {
  const perPage = 10

  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, customerCounselingList.length)

  const renderCustomerCounselingList = customerCounselingList.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
    renderCustomerCounselingList,
  }
}
