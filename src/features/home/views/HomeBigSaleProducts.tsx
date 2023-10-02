import HomeProductsSection from "./HomeProductsSection"

const HomeBigSaleProducts = () => {
  const tesst = () => {
    console.log(123)
  }
  return (
    <HomeProductsSection
      products={[]}
      onMoreClick={tesst}
      sectionTitle="BIG SALE"
      sectionSubTitle="할인율이 높은 상품을 모아봤어요"
    />
  )
}

export default HomeBigSaleProducts
