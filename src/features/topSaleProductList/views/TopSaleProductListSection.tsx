import MyPageSectionTitle from "@/features/myPage/views/MyPageSectionTitle"
import SaleProductList from "./SaleProductList"

const TopSaleProductListSection = () => {
  return (
    <section>
      <MyPageSectionTitle title="BIG SALE" />

      <SaleProductList />
    </section>
  )
}

export default TopSaleProductListSection
