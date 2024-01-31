"use client"

import ProductCard from "@/features/common/views/ProductCard"
import { useGetSearchMatchingNameInfinityQuery } from "../hooks/useGetSearchMatchingNameInfinityQuery"
import FourGridProductList from "@/features/common/views/FourGridProductList"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"
import NoneSearchResult from "./NoneSearchResult"

const SearchProductListMatchingName = () => {
  const {
    productListMatchingName,
    isLoadMoreFetching,
    isLoading,
    loadMoreRef,
    totalCount,
  } = useGetSearchMatchingNameInfinityQuery()

  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }

  if (totalCount === 0) {
    return <NoneSearchResult />
  }

  return (
    <>
      <FourGridProductList className="mt-[50px]">
        {productListMatchingName?.pages.flatMap((group) =>
          group.productList.map((product) => {
            return (
              <ProductCard
                key={`category-product-${product.id}`}
                isPriority
                productInfo={product}
              />
            )
          })
        )}

        <div ref={loadMoreRef} />
      </FourGridProductList>

      {isLoadMoreFetching && <SkeletonProductList />}
    </>
  )
}

export default SearchProductListMatchingName
