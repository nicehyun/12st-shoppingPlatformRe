"use client"

import FourGridProductList from "@/features/common/views/FourGridProductList"
import ProductCard from "@/features/common/views/ProductCard"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"
import NoneSearchResult from "./NoneSearchResult"
import { useGetSearchMatchingBrandInfinityQuery } from "../hooks/useGetSearchMatchingBrandInfinityQuery"

const SearchProductListMatchingBrand = () => {
  const {
    productListMatchingBrand,
    isLoadMoreFetching,
    isLoading,
    loadMoreRef,
    totalCount,
  } = useGetSearchMatchingBrandInfinityQuery()

  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }

  if (totalCount === 0) {
    return <NoneSearchResult />
  }

  return (
    <>
      <FourGridProductList className="mt-[50px]">
        {productListMatchingBrand?.pages.flatMap((group) =>
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

export default SearchProductListMatchingBrand
