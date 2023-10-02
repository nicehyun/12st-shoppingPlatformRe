import HomeProductsSection from "./HomeProductsSection"

const HomeArrivalProducts = () => {
  const tesst = () => {
    console.log(123)
  }
  return (
    <HomeProductsSection
      products={[]}
      onMoreClick={tesst}
      sectionTitle="NEW ARRIVALS"
      sectionSubTitle="새롭게 업데이트된 상품을 모아봤어요"
      isBackGroundColor={false}
    />
  )
}

export default HomeArrivalProducts
