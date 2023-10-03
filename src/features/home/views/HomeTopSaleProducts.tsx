"use client"

import { useTopSaleProductsQuery } from "../hooks/useTopSaleProductsQuery"
import { getTopSaleProducts } from "../models/products"
import HomeProductsSection from "./HomeProductsSection"

const HomeTopSaleProducts = () => {
  const { products } = useTopSaleProductsQuery()
  const tesst = () => {
    console.log(123)
  }

  return (
    <HomeProductsSection
      products={products?.slice(0, 10) ?? []}
      onMoreClick={tesst}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    />
  )
}

export default HomeTopSaleProducts
