"use client"

import { useGetFiltedProductListWithCategoryInfinityQuery } from "@/features/categoryManagement/hooks/useGetFiltedProductListWithCategoryInfinityQuery"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const FiltedProcutList = () => {
  const { filtedProductList, isLoading, loadMoreRef, isLoadMoreFetching } =
    useGetFiltedProductListWithCategoryInfinityQuery()

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: filtedProductList,
    loadMoreRef,
    sectionClassification: "topSale",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default FiltedProcutList
