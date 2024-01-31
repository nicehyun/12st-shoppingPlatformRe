"use client"

import ProductCard from "../../common/views/ProductCard"
import { useGetBestProductListWithCategoryInfiniteQuery } from "../hooks/useGetBestProductListWithCategoryInfiniteQuery"
import FourGridProductList from "../../common/views/FourGridProductList"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"

const BestProductList = () => {
  const { bestProductList, isLoading, isLoadMoreFetching, loadMoreRef } =
    useGetBestProductListWithCategoryInfiniteQuery()

  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }

  return (
    <>
      <FourGridProductList className="mt-[50px]">
        {bestProductList?.pages.flatMap((group, pageIndex) =>
          group.productList.map((product, index) => {
            const globalIndex = pageIndex * group.productList.length + index + 1

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

        <div ref={loadMoreRef} />
      </FourGridProductList>

      {isLoadMoreFetching && <SkeletonProductList />}
    </>
  )
}

export default BestProductList
