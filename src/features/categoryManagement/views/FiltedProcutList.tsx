"use client"

import ProductCard from "@/features/common/views/ProductCard"
import { useGetFiltedProductListWithCategoryInfinityQuery } from "@/features/categoryManagement/hooks/useGetFiltedProductListWithCategoryInfinityQuery"
import FourGridProductList from "@/features/common/views/FourGridProductList"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"

const FiltedProcutList = () => {
  const { filtedProductList, isLoading, loadMoreRef, isLoadMoreFetching } =
    useGetFiltedProductListWithCategoryInfinityQuery()

  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }

  return (
    <>
      <FourGridProductList className="mt-[50px]">
        {filtedProductList?.pages.flatMap((group) =>
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

export default FiltedProcutList
