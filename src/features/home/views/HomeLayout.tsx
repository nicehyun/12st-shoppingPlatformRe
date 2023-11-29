import HomeArrivalProductListSection from "./HomeArrivalProductListSection"
import HomeBestProductListSection from "./HomeBestProductListSection"
import HomeTopSaleProducts from "./HomeTopSaleProducts"

const HomeLayout = () => {
  return (
    <>
      <HomeBestProductListSection />
      <HomeArrivalProductListSection />
      <HomeTopSaleProducts />
    </>
  )
}

export default HomeLayout
