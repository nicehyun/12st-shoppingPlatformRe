import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetCustomerCounselingListQuery } from "./useGetCustomerCounselingListQuery"

export const useGetProductQnAListPagination = () => {
  const perPage = 10

  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  const productQnAList = customerCounselingList.filter(
    (productQnA) => productQnA.csType === "product"
  )

  const { listPagination, currentPage, handlePageChange, paginationCount } =
    usePagination(perPage, productQnAList.length)

  const renderProductQnAList = productQnAList.slice(
    listPagination.indexOfFirst,
    listPagination.indexOfLast
  )

  return {
    renderProductQnAList,
    isLoading,
    currentPage,
    handlePageChange,
    paginationCount,
  }
}
