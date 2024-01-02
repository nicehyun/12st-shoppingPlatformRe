import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const HomeTopSaleProductListSection = () => {
  return (
    <HomeBasicProductsSection
      sectionType="big_sale"
      route={ROUTE.TOPSALEPRODUCTLIST}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    />
  )
}

export default HomeTopSaleProductListSection
