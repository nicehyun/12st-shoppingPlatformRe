"use client"

import { useGetTopSaleProductListInfinityQuery } from "../hooks/useGetTopSaleProductListInfinityQuery"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const SaleProductList = () => {
  const { topSaleProductList, isLoadMoreFetching, isLoading, loadMoreRef } =
    useGetTopSaleProductListInfinityQuery()

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: topSaleProductList,
    loadMoreRef,
    sectionClassification: "arrival",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default SaleProductList
