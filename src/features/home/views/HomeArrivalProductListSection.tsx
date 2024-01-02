import { use } from "react"
import HomeShadowProductsSection from "./HomeShadowProductsSection"
import { homeAPI } from "../models/homeAPI"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const HomeArrivalProductListSection = () => {
  const { arrivalProductList } = use(homeAPI.getIndividualSectionProductList())

  return (
    <HomeShadowProductsSection
      products={arrivalProductList?.slice(0, 10) ?? []}
      route={ROUTE.ARRIVALPRODUCTLIST}
      sectionTitle="NEW ARRIVAL"
      sectionSubTitle="새롭게 업데이트된 상품을 모아봤어요"
    />
  )
}

export default HomeArrivalProductListSection
