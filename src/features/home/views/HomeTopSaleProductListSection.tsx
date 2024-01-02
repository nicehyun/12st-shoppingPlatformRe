import { use } from "react"
import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { homeAPI } from "../models/homeAPI"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const HomeTopSaleProductListSection = () => {
  const { topSaleProductList } = use(homeAPI.getIndividualSectionProductList())

  return (
    <HomeBasicProductsSection
      products={topSaleProductList?.slice(0, 12) ?? []}
      route={ROUTE.TOPSALEPRODUCTLIST}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    />
  )
}

export default HomeTopSaleProductListSection
