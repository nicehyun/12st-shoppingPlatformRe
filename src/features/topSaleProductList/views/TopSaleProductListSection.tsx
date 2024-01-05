import SectionTitle from "@/features/myPage/views/SectionTitle"
import SaleProductList from "./SaleProductList"
import SectionSuspense from "@/features/common/views/SuspenseIncludingFallback"

const TopSaleProductListSection = () => {
  return (
    <section>
      <SectionTitle title="BIG SALE" />

      <SaleProductList />
    </section>
  )
}

export default TopSaleProductListSection
