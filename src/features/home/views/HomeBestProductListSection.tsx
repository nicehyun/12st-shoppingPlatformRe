import HomeBasicProductsSection from "./HomeBasicProductsSection"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const HomeBestProductListSection = () => {
  return (
    <HomeBasicProductsSection
      sectionClassification="BEST"
      route={ROUTE.BESTPRODUCTLIST}
      sectionTitle="WEEKLY BEST"
      sectionSubTitle="한주간 가장 사랑받은 상품을 모아봤어요"
    />
  )
}

export default HomeBestProductListSection
