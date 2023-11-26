import PageLayout from "@/common/views/PageLayout"
import {
  getArrivalProducts,
  getBestSellingProducts,
  getTopSaleProducts,
} from "@/features/home/models/products"
import Header from "@/features/layout/views/Header"
import Navigation from "@/features/layout/views/Navigation"
import getQueryClient from "@/reactQuery/utils/getQueryClient"
import { dehydrate, Hydrate } from "@tanstack/react-query"
import { ReactNode } from "react"

const HomeLayout = async ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["bestProducts"], getBestSellingProducts)
  // await queryClient.prefetchQuery(["topSaleProducts"], getTopSaleProducts)
  // await queryClient.prefetchQuery(["arrivalProducts"], getArrivalProducts)
  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <Header isShowCart={true} />

      <PageLayout classNames="px-0">{children}</PageLayout>

      <Navigation />
    </Hydrate>
  )
}

export default HomeLayout
