"use client"

import ProductCard from "../../common/views/ProductCard"
import { useGetBestProductListWithCategoryInfiniteQuery } from "../hooks/useGetBestProductListWithCategoryInfiniteQuery"
import FourGridProductList from "../../common/views/FourGridProductList"
import SkeletonProductCard from "../../common/views/SkeletonProductCard"

const BestProductList = () => {
  const { bestProductList, isLoading, isFetching, loadMoreRef } =
    useGetBestProductListWithCategoryInfiniteQuery()

  if (isLoading) {
    return (
      <FourGridProductList className="mt-[50px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonProductCard key={`skeleton-${index}`} />
        ))}
      </FourGridProductList>
    )
  }

  return (
    <FourGridProductList className="mt-[50px]">
      {bestProductList?.pages.flatMap((group, pageIndex) =>
        group.map((product, index) => {
          const globalIndex = pageIndex * group.length + index + 1

          return (
            <ProductCard
              key={`best-product-${product.id}`}
              isPriority
              productInfo={product}
              label={globalIndex}
            />
          )
        })
      )}

      {isFetching &&
        Array.from({ length: 8 }).map((_, index) => (
          <SkeletonProductCard key={`skeleton-fetching-${index}`} />
        ))}
      <div ref={loadMoreRef} />
    </FourGridProductList>
  )
}

export default BestProductList
