import ArrivalProductList from "./ArrivalProductList"
import HomeShadowProductsSection from "./HomeShadowProductsSection"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const HomeArrivalProductListSection = () => {
  return (
    <HomeShadowProductsSection
      route={ROUTE.ARRIVALPRODUCTLIST}
      sectionTitle="NEW ARRIVAL"
      sectionSubTitle="새롭게 업데이트된 상품을 모아봤어요"
    >
      <ArrivalProductList />
    </HomeShadowProductsSection>
  )
}

export default HomeArrivalProductListSection
