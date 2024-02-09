import { ChangeEvent, useEffect, useState } from "react"

export const usePagination = (perPage: number, listLength: number) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }

  const [listPagination, setListPagination] = useState({
    indexOfLast: 0,
    indexOfFirst: 0,
  })

  const paginationCount = Math.ceil(listLength / perPage)

  useEffect(() => {
    setListPagination((prev) => {
      return {
        ...prev,
        indexOfLast: currentPage * perPage,
        indexOfFirst: listPagination.indexOfLast - perPage,
      }
    })
  }, [currentPage, listPagination.indexOfLast, listPagination.indexOfFirst])

  return {
    paginationCount,
    currentPage,
    handlePageChange,
    listPagination,
  }
}
