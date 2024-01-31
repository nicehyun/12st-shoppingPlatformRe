"use client"

import { useGetBestProductListWithCategoryInfiniteQuery } from "../hooks/useGetBestProductListWithCategoryInfiniteQuery"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const BestProductList = () => {
  const { bestProductList, isLoading, isLoadMoreFetching, loadMoreRef } =
    useGetBestProductListWithCategoryInfiniteQuery()

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: bestProductList,
    loadMoreRef,
    sectionClassification: "topSale",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default BestProductList
