import ArrivalProductListSection from "@/features/arrivalProductList/views/ArrivalProductListSection"
import { homeAPI } from "@/features/home/models/homeAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const ArrivalProductListPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    ["indiviualProductList"],
    () => homeAPI.getIndividualSectionProductList(),
    {
      cacheTime: 60 * 60 * 1000,
    }
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ArrivalProductListSection />
    </Hydrate>
  )
}

export default ArrivalProductListPage
