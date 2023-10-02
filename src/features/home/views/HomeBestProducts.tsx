"use client"

import HomeProductsSection from "./HomeProductsSection"
import bestImage from "/public/images/best.png"
import { useBestSellingProducts } from "../hooks/useBestSellingProducts"

const HomeBestProducts = () => {
  const { products } = useBestSellingProducts()

  return (
    <HomeProductsSection
      products={products?.slice(0, 10) ?? []}
      onMoreClick={() => {}}
      sectionImage={bestImage}
      sectionTitle="12st BEST"
    />
  )
}

export default HomeBestProducts
