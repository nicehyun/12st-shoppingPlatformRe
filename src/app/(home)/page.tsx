import { arrivalAPI } from "@/features/arrivalProductList/models/arrivalAPI"
import { bestProductListAPI } from "@/features/bestProductList/models/bestProductListAPI"
import HomeLayout from "@/features/home/views/HomeLayout"
import { topSaleAPI } from "@/features/topSaleProductList/models/topSaleAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient"
import { dehydrate } from "@tanstack/react-query"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

const HomePage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["bestProductList", "home"], () =>
    bestProductListAPI.getBestProductListWithCategory("", 1)
  )

  await queryClient.prefetchQuery(["arrivalProductList", "home"], () =>
    arrivalAPI.getArrivalProductList(1)
  )

  await queryClient.prefetchQuery(["topSaleProductList", "home"], () =>
    topSaleAPI.getTopSaleProductList(1)
  )

  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <HomeLayout />
    </Hydrate>
  )
}

export default HomePage
