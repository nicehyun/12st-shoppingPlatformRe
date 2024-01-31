"use client"

import { useGetSearchMatchingNameInfinityQuery } from "../hooks/useGetSearchMatchingNameInfinityQuery"
import NoneSearchResult from "./NoneSearchResult"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const SearchProductListMatchingName = () => {
  const {
    productListMatchingName,
    isLoadMoreFetching,
    isLoading,
    loadMoreRef,
    totalCount,
  } = useGetSearchMatchingNameInfinityQuery()

  if (totalCount === 0) {
    return <NoneSearchResult />
  }

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: productListMatchingName,
    loadMoreRef,
    sectionClassification: "topSale",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default SearchProductListMatchingName
