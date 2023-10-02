"use client"

import HomeProductsSection from "./HomeProductsSection"
import { useBestSellingProducts } from "../hooks/useBestSellingProducts"

const HomeBestProducts = () => {
  const { products } = useBestSellingProducts()

  return (
    <HomeProductsSection
      products={products?.slice(0, 10) ?? []}
      onMoreClick={() => {}}
      sectionTitle="WEEKLY BEST"
      sectionSubTitle="한주간 가장 사랑받은 상품을 모아봤어요"
    />
  )
}

export default HomeBestProducts
