import {
  getArrivalProducts,
  getBestSellingProducts,
  getTopSaleProducts,
} from "@/features/home/models/products"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import getQueryClient from "@/reactQuery/utils/getQueryClient"
import { dehydrate, Hydrate } from "@tanstack/react-query"
import PageLayout from "../../common/views/PageLayout"
import HomeLayout from "@/features/home/views/HomeLayout"

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["bestProducts"], getBestSellingProducts)
  await queryClient.prefetchQuery(["topSaleProducts"], getTopSaleProducts)
  await queryClient.prefetchQuery(["arrivalProducts"], getArrivalProducts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">
        <HomeLayout />
      </PageLayout>

      <Navigation />
    </Hydrate>
  )
}
