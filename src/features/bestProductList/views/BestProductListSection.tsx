import SectionTitle from "../../myPage/views/SectionTitle"
import BestProductList from "./BestProductList"
import SecondCategories from "./SecondCategories"
import ThirdCategories from "./ThirdCategories"

const BestProductListSection = () => {
  return (
    <section>
      <SectionTitle title="BEST" />

      <SecondCategories linkDefaultHref="/bestProductList" />

      <ThirdCategories linkDefaultHref="/bestProductList" />

      <BestProductList />
    </section>
  )
}

export default BestProductListSection
