import { homeAPI } from "@/features/home/models/homeAPI"
import TopSaleProductListSection from "@/features/topSaleProductList/views/TopSaleProductListSection"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const TopSaleProductListPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["indiviualProductList"], () =>
    homeAPI.getIndividualSectionProductList()
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <TopSaleProductListSection />
    </Hydrate>
  )
}

export default TopSaleProductListPage
