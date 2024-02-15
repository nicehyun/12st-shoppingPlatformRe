import { arrivalAPI } from "@/features/arrivalProductList/models/arrivalAPI"
import ArrivalProductListSection from "@/features/arrivalProductList/views/ArrivalProductListSection"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient"
import { dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const ArrivalProductListPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(["arrival", "initial"], () =>
    arrivalAPI.getArrivalProductList(1)
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ArrivalProductListSection />
    </Hydrate>
  )
}

export default ArrivalProductListPage
