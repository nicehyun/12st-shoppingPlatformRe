import { getBestSellingProducts } from "@/features/home/models/bestProducts"
import Navigation from "@/features/layout/views/Navigation"
import getQueryClient from "@/reactQuery/utils/getQueryClient"
import { dehydrate, Hydrate } from "@tanstack/react-query"
import PageLayout from "../../common/views/PageLayout"
import HomeBestProducts from "../../features/home/views/HomeBestProducts"

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["bestProducts"], getBestSellingProducts)
  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <PageLayout>
        <HomeBestProducts />
      </PageLayout>

      <Navigation />
    </Hydrate>
  )
}
