import SectionTitle from "../SectionTitle"
import ProductQnAContentList from "./ProductQnAContentList"
import ProductQnAInfoSectionHeader from "./ProductQnAInfoSectionHeader"

const ProductQnAInfoSection = () => {
  return (
    <section>
      <SectionTitle title="상품 Q&A 내역" />
      <ProductQnAInfoSectionHeader />

      <ProductQnAContentList />
    </section>
  )
}

export default ProductQnAInfoSection
