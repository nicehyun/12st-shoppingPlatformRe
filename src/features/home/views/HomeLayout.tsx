import { Suspense } from "react"
import HomeArrivalProductListSection from "./HomeArrivalProductListSection"
import HomeBestProductListSection from "./HomeBestProductListSection"
import HomeTopSaleProductListSection from "./HomeTopSaleProductListSection"
import Loading from "@/features/common/views/Loading"

const HomeLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <HomeBestProductListSection />
      </Suspense>

      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <HomeArrivalProductListSection />
      </Suspense>

      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <HomeTopSaleProductListSection />
      </Suspense>
    </>
  )
}

export default HomeLayout
