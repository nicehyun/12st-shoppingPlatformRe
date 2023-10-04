"use client"

import { useArrivalProductsQuery } from "../hooks/useArrivalProductsQuery"
import HomeShadowProductsSection from "./HomeShadowProductsSection"

const HomeArrivalProducts = () => {
  const { products } = useArrivalProductsQuery()
  const tesst = () => {
    console.log(123)
  }

  return (
    <HomeShadowProductsSection
      products={products ?? []}
      onMoreClick={tesst}
      sectionTitle="NEW ARRIVAL"
      sectionSubTitle="새롭게 업데이트된 상품을 모아봤어요"
    />
  )
}

export default HomeArrivalProducts
