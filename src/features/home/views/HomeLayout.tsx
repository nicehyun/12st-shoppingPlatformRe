import HomeArrivalProducts from "./HomeArrivalProducts"
import HomeBestProducts from "./HomeBestProducts"
import HomeBigSaleProducts from "./HomeBigSaleProducts"

const HomeLayout = () => {
  return (
    <>
      <HomeBestProducts />
      <HomeArrivalProducts />
      <HomeBigSaleProducts />
    </>
  )
}

export default HomeLayout
