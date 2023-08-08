"use client"

import HomeProductsSection from "./HomeProductsSection"
import bestImage from "../../../../public/images/best.png"
import { useQuery } from "@tanstack/react-query"
import getBestSellingProducts from "../models/bestProducts"

const HomeBestProducts = () => {
  const { data } = useQuery({
    queryKey: ["bestProducts"],
    queryFn: getBestSellingProducts,
  })

  console.log(data)
  return (
    <HomeProductsSection
      onMoreClick={() => {}}
      sectionImage={bestImage}
      sectionTitle="12st BEST"
    />
  )
}

export default HomeBestProducts
