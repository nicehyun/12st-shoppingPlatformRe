import HomeArrivalProductListSection from "./HomeArrivalProductListSection"
import HomeBestProductListSection from "./HomeBestProductListSection"
import HomeTopSaleProductListSection from "./HomeTopSaleProductListSection"

const HomeLayout = () => {
  return (
    <>
      <HomeBestProductListSection />
      <HomeArrivalProductListSection />
      <HomeTopSaleProductListSection />
    </>
  )
}

export default HomeLayout
