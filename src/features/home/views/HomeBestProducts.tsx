import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { useBestSellingProductsQuery } from "../hooks/useBestSellingProductsQuery"
import { use } from "react"
import { getBestSellingProducts } from "../models/products"

const HomeBestProducts = async () => {
  // const { products } = useBestSellingProductsQuery()

  // getBestSellingProducts

  const test = await fetch("http://localhost:3000/api/", {
    next: { revalidate: 300 }, // Revalidate every 60 seconds
  })

  console.log(test)

  return (
    <HomeBasicProductsSection
      // products={products?.slice(0, 10) ?? []}
      products={[]}
      onMoreClick={() => {}}
      sectionTitle="WEEKLY BEST"
      sectionSubTitle="한주간 가장 사랑받은 상품을 모아봤어요"
    />
  )
}

export default HomeBestProducts
