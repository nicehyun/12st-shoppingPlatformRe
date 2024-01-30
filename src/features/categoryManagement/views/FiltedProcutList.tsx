"use client"

import ProductCard from "@/features/common/views/ProductCard"
import { useGetFiltedProductListWithCategoryInfinityQuery } from "@/features/categoryManagement/hooks/useGetFiltedProductListWithCategoryInfinityQuery"
import FourGridProductList from "@/features/common/views/FourGridProductList"
import SkeletonProductCard from "@/features/common/views/SkeletonProductCard"

const FiltedProcutList = () => {
  const { filtedProductList, isLoading, loadMoreRef, isLoadMoreFetching } =
    useGetFiltedProductListWithCategoryInfinityQuery()

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
      {filtedProductList?.pages.flatMap((group) =>
        group.map((product) => {
          return (
            <ProductCard
              key={`category-product-${product.id}`}
              isPriority
              productInfo={product}
            />
          )
        })
      )}

      {isLoadMoreFetching &&
        Array.from({ length: 8 }).map((_, index) => (
          <SkeletonProductCard key={`skeleton-fetching-${index}`} />
        ))}
      <div ref={loadMoreRef} />
    </FourGridProductList>
  )
}

export default FiltedProcutList
