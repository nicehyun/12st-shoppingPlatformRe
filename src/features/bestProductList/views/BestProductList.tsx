"use client"

import ProductCard from "../../common/views/ProductCard"
import { useGetBestProductListWithCategoryQuery } from "../hooks/useGetBestProductListWithCategoryQuery"
import FourGridProductList from "../../common/views/FourGridProductList"
import SkeletonProductCard from "../../common/views/SkeletonProductCard"

const BestProductList = () => {
  const { bestProductListWithCategory, isLoading } =
    useGetBestProductListWithCategoryQuery()

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
      {bestProductListWithCategory.map((product, index) => (
        <ProductCard
          key={`best-product-${product.id}`}
          productInfo={product}
          label={index + 1}
        />
      ))}
    </FourGridProductList>
  )
}

export default BestProductList
