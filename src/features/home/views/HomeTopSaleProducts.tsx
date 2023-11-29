import { use } from "react"
import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { homeAPI } from "../models/homeAPI"

const HomeTopSaleProducts = () => {
  const { topSaleProductList } = use(homeAPI.getIndividualSectionProductList())
  const tesst = () => {
    console.log(123)
  }

  return (
    <HomeBasicProductsSection
      products={topSaleProductList.slice(0, 12) ?? []}
      onMoreClick={tesst}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    />
  )
}

export default HomeTopSaleProducts
