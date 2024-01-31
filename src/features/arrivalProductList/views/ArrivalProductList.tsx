"use client"

import { useGetArrivalProductListInfinityQuery } from "../hooks/useGetArrivalProductListInfinityQuery"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const ArrivalProductList = () => {
  const { arrivalProductList, isLoadMoreFetching, isLoading, loadMoreRef } =
    useGetArrivalProductListInfinityQuery()

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: arrivalProductList,
    loadMoreRef,
    sectionClassification: "arrival",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default ArrivalProductList
