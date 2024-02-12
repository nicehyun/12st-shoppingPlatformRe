import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import TopSaleProductList from "./TopSaleProductList"

const HomeTopSaleProductListSection = () => {
  return (
    <HomeBasicProductsSection
      route={ROUTE.TOPSALEPRODUCTLIST}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    >
      <TopSaleProductList />
    </HomeBasicProductsSection>
  )
}

export default HomeTopSaleProductListSection
