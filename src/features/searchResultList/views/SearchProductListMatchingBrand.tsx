"use client"

import NoneSearchResult from "./NoneSearchResult"
import { useGetSearchMatchingBrandInfinityQuery } from "../hooks/useGetSearchMatchingBrandInfinityQuery"
import InfiniteScrollProductList from "@/features/common/views/InfiniteScrollProductList"

const SearchProductListMatchingBrand = () => {
  const {
    productListMatchingBrand,
    isLoadMoreFetching,
    isLoading,
    loadMoreRef,
    totalCount,
  } = useGetSearchMatchingBrandInfinityQuery()

  if (totalCount === 0) {
    return <NoneSearchResult />
  }

  const infiniteScrollProductListProps = {
    isLoading,
    isLoadMoreFetching,
    productList: productListMatchingBrand,
    loadMoreRef,
    sectionClassification: "topSale",
  }

  return <InfiniteScrollProductList {...infiniteScrollProductListProps} />
}

export default SearchProductListMatchingBrand
