"use client"
import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { use } from "react"
import { homeAPI } from "../models/homeAPI"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import { useGetIndiviualProductListQuery } from "../hooks/useGetIndiviualProductListQuery"

const HomeBestProductListSection = () => {
  const { bestProductList } = use(homeAPI.getIndividualSectionProductList())
  // const { bestProductList } = useGetIndiviualProductListQuery()

  return (
    <HomeBasicProductsSection
      products={bestProductList?.slice(0, 12) ?? []}
      route={ROUTE.BESTPRODUCTLIST}
      sectionTitle="WEEKLY BEST"
      sectionSubTitle="한주간 가장 사랑받은 상품을 모아봤어요"
    />
  )
}

export default HomeBestProductListSection
