"use client"

import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { useBestSellingProductsQuery } from "../hooks/useBestSellingProductsQuery"
import { getToken } from "next-auth/jwt"

const HomeBestProducts = () => {
  const { products } = useBestSellingProductsQuery()

  return (
    <HomeBasicProductsSection
      products={products?.slice(0, 10) ?? []}
      onMoreClick={() => {}}
      sectionTitle="WEEKLY BEST"
      sectionSubTitle="한주간 가장 사랑받은 상품을 모아봤어요"
    />
  )
}

export default HomeBestProducts
