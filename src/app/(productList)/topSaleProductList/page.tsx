import { topSaleAPI } from "@/features/topSaleProductList/models/topSaleAPI"
import TopSaleProductListSection from "@/features/topSaleProductList/views/TopSaleProductListSection"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient"
import { dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const TopSaleProductListPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(["topSale", "initial"], () =>
    topSaleAPI.getTopSaleProductList(1)
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <TopSaleProductListSection />
    </Hydrate>
  )
}

export default TopSaleProductListPage
