import { homeAPI } from "@/features/home/models/homeAPI"
import HomeLayout from "@/features/home/views/HomeLayout"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "12ST",
  description: "Shopping Platform",
}

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    ["indiviualProductList"],
    () => homeAPI.getIndividualSectionProductList(),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: Infinity,
    }
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <HomeLayout />
    </Hydrate>
  )
}
